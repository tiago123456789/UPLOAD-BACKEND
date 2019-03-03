const aws = require("aws-sdk");

class AwsS3 {

    constructor() {
        this._s3Client = new aws.S3({
            region: process.env.AWS_REGION_BUCKET,
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRETN_ACCESS_KEY
        });
    }

    deleteObject(key) {
        return new Promise((resolve, reject) => {
            this._s3Client.deleteObject(
                { Bucket: process.env.AWS_BUCKET, Key: key },
                (err, data) => {
                    if (err) reject(err);
                    resolve();
                }
            )
        })
    }

    getS3Client() {
        return this._s3Client;
    }
}

module.exports = AwsS3;