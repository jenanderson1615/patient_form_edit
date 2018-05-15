
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql");

//database connection
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "macpractice2"
});

//setup json parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.por || 9009;
var router = express.Router();

app.route('/patients')
    .get(function (req, res) {
        connection.connect(function (err) {
            if (err) {
                console.log(err);
            }
            connection.query("select person.first, person.last from patient, person where patient.person_id = person.person_id", function (err, result, fields) {
                if (err) throw err;
                res.send(JSON.stringify({
                    "status": 200,
                    "error": null,
                    "response": result
                }));
            });
        })
    })

    .post(function (req, res) {
        connection.connect(function (err) {
            if (err) {
                console.log(err);
            }
            var myQuery = "INSERT INTO person(first, last, salute, suffix, maiden, nickname, birthday, pop_sex, phone1, email) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            var newData = [req.body.first,req.body.last,req.body.salute,req.body.suffix,req.body.maiden,req.body.nickname,req.body.birthday,req.body.pop_sex,req.body.phone1,req.body.email];
            connection.query(myQuery,
                newData,
                function (err, result, fields) {   
                    if (err) throw err;
                    res.send(JSON.stringify({
                        "status": 200,
                        "error": null,
                        "response": result
                    }));
                });
        })
    });

app.listen(port, function () {
    console.log("Express server running on port %d", port);
});
