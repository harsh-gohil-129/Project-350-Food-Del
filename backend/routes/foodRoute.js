import express from "express";
import multer from "multer";
import { addFood } from "../controllers/foodControllers.js";
import { addFood, listFood } from "../controllers/foodControllers.js";

const foodRouter = express.Router();

//image Storeage Engine

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);

export default foodRouter;
