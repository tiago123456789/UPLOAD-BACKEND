class Dao {

    constructor(collection) {
        this._collection = collection;
    }

    async save(newData) {
        return await this._collection.create(newData);
    }

    async findAll() {
        return await this._collection.find({});
    }

    async findById(id) {
        return await this._collection.findById(id);
    }

    async remove(id) {
        return await this._collection.deleteOne({ _id: id });
    }

    getCollection() {
        return this._collection;
    }
}

module.exports = Dao;