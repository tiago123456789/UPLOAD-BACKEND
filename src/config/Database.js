const mongoose = require("mongoose");

// Define lib promise used mongoose.
mongoose.Promise = Promise;

mongoose.connect(process.env.URL_DATABASE, { useNewUrlParser: true });