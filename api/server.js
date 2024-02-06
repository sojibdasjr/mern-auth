import { log } from "console";
import express from "express";
import mongoose from "mongoose";


mongoose.connect('mongodb+srv://mern-auth:mern-auth@mern.4xp8tv7.mongodb.net/mern-auth?retryWrites=true&w=majority').then(()=>{
    log("Connected to MongoDB");
}).catch((err)=>{
    log(err);
})

const app = express ();

app.listen(3000, ()=>{
    log('Server listening to on port 3000');
});