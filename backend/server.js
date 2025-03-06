import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"

const app=express()

const port=4000


app.use(express.json())
app.use(cors())
//db connection 
connectDB();
//api endpoints 

app.use("/api/food",foodRouter)




app.get("/",(req,res)=>{
  res.send("API working")
})

app.listen(port,()=>{
  console.log(`Server Started on http://localhost:${port}`)
})
// mongodb+srv://ibrahim036sust:aE54X59FtUwxUWij@cluster0.asgqfnl.mongodb.net/?