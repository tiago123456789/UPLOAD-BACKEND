const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    name: String,
    size: Number,
    key: String,
    url: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = new mongoose.model("post", postSchema);