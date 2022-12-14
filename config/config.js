// database parameters
const dbSettings = {
  db: process.env.MYSQL_DBNAME || "todo4",
  user: process.env.MYSQL_USER || "dhimas",
  pass: process.env.MYSQL_PASSWORD || "test123",
  host: process.env.MYSQL_HOST || "localhost",
};

// server parameters
const serverSettings = {
  port: process.env.PORT || 3030,
};

module.exports = Object.assign({}, { dbSettings, serverSettings });
