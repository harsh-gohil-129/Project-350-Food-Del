import cors from "cors";
import express from "express";
import foodRouter from "./routes/foodRoute.js";
import { connectDB } from "./config/db.js";

const app = express();

const port = 4000;

app.use(express.json());
app.use(cors());
//db connection
connectDB();
//api endpoints

app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
// mongodb+srv://ibrahim036sust:aE54X59FtUwxUWij@cluster0.asgqfnl.mongodb.net/?
