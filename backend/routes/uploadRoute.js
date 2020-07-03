import express from "express";
import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import config from "../config";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.jpg`); // file name: Date.now() + ".jpg"
  },
});

const upload = multer({ storage });

const router = express.Router();

// Get the file and Save
router.post("/", upload.single("image"), (req, res) => {
  // Access to the file
  res.send(`/${req.file.path}`); // path is used for saving at the mongodb
});

// config aws is based on AccessID and SecretAccessKey, and Setting
aws.config.update({
  accessKeyId: config.accessKeyId,
  secretAccessKey: config.secretAccessKey,
});

// access to s3 service
const s3 = new aws.S3();

// use multer-s3
const storageS3 = multerS3({
  s3,
  bucket: "hongshop-bucket",
  acl: "public-read", // after uploading file, the file is readable publicly
  contentType: multerS3.AUTO_CONTENT_TYPE,
  key(req, file, cb) {
    cb(null, file.originalname);
  },
});

// create instance of multer
const uploadS3 = multer({ storage: storageS3 });

// create route
router.post("/s3", uploadS3.single("image"), (req, res) => {
  res.send(req.file.location); // location: url of the uploaded file
});

export default router;
