require('dotenv').config();
const express=require("express");
const mongoose=require("mongoose");
const userRoutes=require("./routes/userRoutes")
const postRoutes=require("./routes/postRoutes")
const commentRoutes=require("./routes/commentRoutes")

const app=express();

// Setup connections to database
console.log(process.env.DATABASE_URL)
mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log('Connected to MongoDB...'))
    .catch(err => console.log('Could not connect to MongoDB...',err))

// Convert request into JSON format
app.use(express.json());    

app.use('/api/users',userRoutes);
app.use('/api/users/post',postRoutes);
app.use('/api/users/comment',commentRoutes);

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Listening to port ${port}...`)
});