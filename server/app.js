//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const cors = require("cors")
const mongoose = require('mongoose');


const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors())
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/EmployeeDB", { useNewUrlParser: true });

const employeeSchema = {
    _id: Object,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,

};

const Employee = mongoose.model("employees", employeeSchema);


app.route("/employees")
    .get(async function (req, res) {
        try {
            const foundEmp = await Employee.find();
            res.send(foundEmp);
        } catch (err) {
            res.send(err);
        }
    })

app.route("/submit").post(async function (req, res) {
    const newEmp = new Employee({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
    });
    try {
        const savedEmp = await newEmp.save();
        res.send(savedEmp);
    } catch (err) {
        console.log(err);
    }
});

app.route("/employees/:id").delete(async function (req, res) {
    try {
        const deletedEmp = await Employee.deleteOne({ phone: req.params.id });
        res.send(deletedEmp);
    } catch (err) {
        console.log(err);
    }
});

app.listen(4000, function () {
    console.log("Server started on port 4000");
});
