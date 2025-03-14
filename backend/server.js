import "dotenv/config.js";
import cartRouter from "./routes/cartRoute.js";
import cors from "cors";
import express from "express";
import foodRouter from "./routes/foodRoute.js";
import orderRouter from "./routes/orderRoute.js";
import userRouter from "./routes/userRoute.js";
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
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("api/order", orderRouter);
app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
// mongodb+srv://ibrahim036sust:aE54X59FtUwxUWij@cluster0.asgqfnl.mongodb.net/?
