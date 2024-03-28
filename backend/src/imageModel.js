import { Schema, mongoose } from "mongoose";

const ImageDetailsSchema = new Schema({
  title: String,
  description: String,
  image: String,
});

const Image = mongoose.model("Imagedetails", ImageDetailsSchema);

export default Image;