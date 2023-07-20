require('dotenv').config();
const express=require("express");
const mongoose=require("mongoose");
const userRoutes=require("./routes/userRoutes")
const postRoutes=require("./routes/postRoutes")
const officialpostRoutes=require("./routes/officialpostRoutes")
const commentRoutes=require("./routes/commentRoutes")
const officialRoutes=require("./routes/officialRoutes")
const voteRoutes=require("./routes/voteRoutes")
const cors = require('cors');


const app=express();

// Setup connections to database
//console.log(process.env.DATABASE_URL)
mongoose.connect('mongodb://127.0.0.1/hjdb')
    .then(()=>console.log('Connected to MongoDB...'))
    .catch(err => console.log('Could not connect to MongoDB...',err))

// Convert request into JSON format
app.use(express.json());  
app.use(cors({
    origin: '*'
}));

app.use('/api/users',userRoutes);
app.use('/api/official',officialRoutes)
app.use('/api/post',postRoutes);
app.use('/api/officialpost',officialpostRoutes);
app.use('/api/comment',commentRoutes);
app.use('/api/vote',voteRoutes);

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Listening to port ${port}...`)
});