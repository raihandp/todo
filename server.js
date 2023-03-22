require("dotenv").config();
var ENV = process.env;
const { sequelize, serverSettings } = require("./config");
const express = require("express"),
  app = express(),
  server = require("http").createServer(app),
  port = serverSettings.port || 3030,
  bodyParser = require("body-parser");

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
    throw error;
  });
const todoAPI = require("./services/TODO/todo");
const activityAPI = require("./services/ACTIVITY/activity");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Secret"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Content-Type", "application/json");
  next();
});
// Register Service API
activityAPI(app);
todoAPI(app);
sequelize.sync({ force: true });

server.listen(port, function () {
  console.info("Server listening at port %d", port);
});
