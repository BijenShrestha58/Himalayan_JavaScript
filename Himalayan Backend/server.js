require('dotenv').config();
const express=require("express");
const app=express();

//convert into json format
app.use(express.json());
const mongoose=require("mongoose");

mongoose.connect(process.env.DATABASE_URL);
const db=mongoose.connection;
db.on('error',(error)=>{console.log(error);})
db.once('open',()=>{console.log("Connected to DataBase")})

const userRoutes=require("./routes/userRoutes")

app.use('/users',userRoutes);

app.listen(3000,()=>{console.log("Server Initiated!.")});