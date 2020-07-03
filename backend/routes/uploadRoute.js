import express from "express";
import multer from "multer";

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

export default router;
