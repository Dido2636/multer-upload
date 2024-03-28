import express from "express";
import cors from "cors";
import "dotenv/config";
import imageRouter from "./imageRoute";
import path from "path";


const app = express();
const PORT = process.env.PORT;
const mongoose = require("mongoose");

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log(`DATABASE MongoDB est connecté`);
}

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/media", imageRouter);
app.use(express.static(path.join(__dirname, './public/images')));

app.get("/", (req, res) => res.json("YESSSS YOU ARE IN THE BACKEND WORLD"));


app.listen(PORT, () =>
  console.log(`[SERVER] is running on http://localhost:${PORT}`)
);
