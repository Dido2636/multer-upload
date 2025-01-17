import multer from "multer";
import path from "path";

const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, './public/images/'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: imageStorage });

export { upload };