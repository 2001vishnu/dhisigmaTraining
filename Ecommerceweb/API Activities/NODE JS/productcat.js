const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql");
const res = require("express/lib/response");
app.use(bodyParser.json());
const port = 3000;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ecommerceweb",
});

app.get("/productcat", function (req, res) {
  con.connect(function (err) {
    if (err) {
      return console.error("error: " + err.message);
    }
  });
  con.query(
    "SELECT  id, txtCategoryName FROM tblproductcategory",
    function (err, result, fields) {
      if (err) {
        res.send(err);
      } else {
        res.send((view = { status: "succes", values: result }));
      }
    }
  );
  con.end();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
