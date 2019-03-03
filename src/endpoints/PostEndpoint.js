const PostDao = require("../dao/PostDao");
const AwsS3 = require("../services/AwsS3");

class PostEndpoint {

    constructor() {
        this._postDao = new PostDao();
        this._awsS3 = new AwsS3();
        this.save = this.save.bind(this);
        this.remove = this.remove.bind(this);
        this.findAll = this.findAll.bind(this);
    }

    async findAll(request, response) {
        const posts = await this._postDao.findAll();
        response.json(posts);
    }

    async remove(request, response) {
        const id = request.params.id;
        const post = await this._postDao.findById(id);
        await this._postDao.remove(id);
        await this._awsS3.deleteObject(post.key)
        response.sendStatus(204);
    }

    async save(request, response) {
        const { originalname: name, size, key, location: url } = request.file;
        const postCreated = await this._postDao.save({ name, size, key, url });
        response.status(201).json(postCreated);
    };

}

module.exports = PostEndpoint;