const express = require("express");
const app = express();
const http = require("http");
const mysql = require("mysql");
const endPointRoot = "/Comp4537/assignment/1/";
const dbPass = "NljP8!Ht*gFJ";
const port = process.env.PORT || 8888;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "ashergum_admin",
    password: dbPass,
    database: "ashergum_Quotes"
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

// Reading from the database
app.get(endPointRoot, (req, res) => {
    db.connect(function (err) {
        let sql = "SELECT * FROM `Quotes` Order BY QuoteID ASC";
        let data = "";

        db.query(sql, function (err, result, fields) {
            if (err) throw err;

            res.json(result);
        });
    });
});

// Uploading data to the database
app.post(endPointRoot, (req, res) => {
    let quote = req.body.quote;
    let author = req.body.author;
    let sql = "INSERT INTO Quotes (Quote, Author) VALUES ('" + quote + "', '" + author + "');";
   
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        } 
        res.json(result);
    });
});

// Editing data in the database
app.put(endPointRoot, (req, res) => {
    let id = req.body.id;
    let quote = req.body.quote;
    let author = req.body.author;
    let sql = "UPDATE Quotes SET quote = '" + quote + "', author = '" + author + "' WHERE QuoteID = " + id + ";";
    db.query(sql, (err, result) => {
      if (err) {
        throw err;
      }
      res.json(result);
    });
  });

// Removing data from the database
app.delete("*", (req, res) => {
    let id = req.body.id;
    let sql = "DELETE FROM Quotes WHERE QuoteID = " + id + ";";
    
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
           
        res.json(result);
    });
});

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});