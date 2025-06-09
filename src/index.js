require("dotenv").config();
const express = require("express");
const app = express();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

configViewEngine(app);

app.use("/", webRoutes);

// test connection
connection.query("select * from users u", function (err, results, fields) {
  console.log("ket qua:", results);
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
