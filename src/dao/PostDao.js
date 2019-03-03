const Dao = require("./Dao");
const postCollection = require("../collections/Post");

class PostDao extends Dao {

    constructor() {
        super(postCollection);
    }
}

module.exports = PostDao;