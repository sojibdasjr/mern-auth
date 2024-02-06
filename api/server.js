import { log } from "console";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();


mongoose.connect(process.env.MONGO).then(()=>{
    log("Connected to MongoDB");
}).catch((err)=>{
    log(err);
})

const app = express ();

app.listen(3000, ()=>{
    log('Server listening to on port 3000');
});