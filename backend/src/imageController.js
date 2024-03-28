import Image from "./imageModel";

 export const createImage = async (req, res) => {
console.log(req.body);
const imageName = req.file.filename;
const title = req.body.title
const description = req.body.description

try {
  await Image.create({ image: imageName, title: title, description: description});
  res.json({ imageName,title,description, status: "media succesfully created" });
} catch (error) {
    console.error("Error fetching all media ", error);
    res.status(500).json({ error: error.message });
}
};

export const getAllImage = async (req, res) => {
    try {
      const image = await Image.find();
      if (!image) {
        return res.status(404).json("All image not found");
      }
      res.json(image);
    } catch (error) {
      console.error("Error fetching all media ", error);
      res.status(500).json({ error: error.message });
    }
  };