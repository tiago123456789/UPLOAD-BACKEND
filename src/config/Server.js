const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

// Loading variable environment.
dotenv.load({ path: path.resolve(__dirname, "..", "..", ".env")});

const routesApp = require("../routes");

// Set connection database.
require("./Database");

// Middleware enable cors on app.
app.use(cors());

// Middleware do parse data to json.
app.use(express.json());

// Middleware to work data submited forms.
app.use(express.urlencoded({ extended: true }));

// Set routes app.
routesApp(app);

module.exports = app;
