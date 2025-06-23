import mongoose from "mongoose";
import {db_name} from "./constant.js";
import express from "express"
const app = express()
(async() =>{
 try {
  await  mongoose.connect(`${process.env.MONGODB_URL} / ${db_name}`)
app.on("error",(error) =>{
console.log("ERROR :",error);
throw error
})

app.listen(process.env.PORT,() => {
console.log(`app is listening on ${process.env.PORT}`)
})
 } catch (error) {
    console.error("ERROR :",error)
    throw error
 }
})()