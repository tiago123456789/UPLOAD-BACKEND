const express = require("express");
const postRoutes = require("./Post");

const router = express.Router();

module.exports = (app) => {
    app.use("/posts", postRoutes(router));
}