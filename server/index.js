
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.por || 9009;
var router = express.Router();

app.use("/patients/1/patient", router);

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "macpractice2"
});

router.get("/", function (req, res, next) {
    connection.connect(function (err) {
        if (err)
	{
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
    });
});

app.listen(port, function () {
    console.log("Express server running on port %d", port);
});
