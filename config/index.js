const { serverSettings } = require("./config");
const { sequelize } = require("./database");
module.exports = Object.assign({}, { sequelize, serverSettings });
