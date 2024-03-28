import {Router} from 'express'
import { upload } from './middleware/multer';
import { createImage, getAllImage } from './imageController';

const imageRouter = Router();

imageRouter.get("/get-image", getAllImage)
imageRouter.post("/upload-image", upload.single("image"), createImage);

export default imageRouter;