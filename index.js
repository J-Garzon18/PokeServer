import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config();
const app = express()

const PORT = process.env.PORT || 3006;

app.set("port",PORT)
app.use(express,json())

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("conect to DB")).catch((error)=>console.error(error));

app.listen(PORT,()=>{
    console.log(`listening in port ${PORT}`)
});