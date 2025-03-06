import mongoose from "mongoose";


 export const connectDB = async()=>{
   await mongoose.connect('mongodb+srv://ibrahim036sust:aE54X59FtUwxUWij@cluster0.asgqfnl.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}