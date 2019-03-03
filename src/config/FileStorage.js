const multer = require("multer");
const path = require("path");
const crypto = require("crypto");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const AwsS3 = require("../services/AwsS3");
const awsS3 = new AwsS3();

const s3Client = awsS3.getS3Client();
const pathStorageFile = path.resolve(__dirname, "..", "..", "tmp/uploads");

module.exports = {
    dest: pathStorageFile,
    storage: multerS3({
        s3: s3Client,
        bucket: process.env.AWS_BUCKET,
        acl: "public-read",
        key: function (request, file, cb) {
            crypto.randomBytes(16, (err, hash) => {
                if (err) console.log(err);
                file.key = `${hash.toString("hex")}-${file.originalname}`;
                cb(null, file.key);
            })
        }
    }),
limits: {
    fileSize: 2 * (1024 * 1024)
},
fileFilter: (request, file, cb) => {
    const allowMimeTypes = [
        "image/jpeg",
        "image/pjpeg",
        "image/png",
        "image/gif"
    ];

    $isTypeAllow = allowMimeTypes.includes(file.mimetype);
    if ($isTypeAllow) {
        cb(null, true);
    } else {
        cb(new Error("Format image invalid!!!"));
    }
}
}