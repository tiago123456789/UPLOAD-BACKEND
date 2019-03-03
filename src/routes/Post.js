const multer = require("multer");
const fileStorageConfig = require("../config/FileStorage");
const PostEndpoint = require("../endpoints/PostEndpoint");
const postEndpoint = new PostEndpoint();

module.exports = (router) => {

    router.get("", postEndpoint.findAll);
    router.delete("/:id", postEndpoint.remove);
    router.post("", multer(fileStorageConfig).single('file'), postEndpoint.save);

    return router;
}