const express =require('express');
const mongoose =require('mongoose');
const authRouter=require('./authRouter');
const PORT= process.env.PORT||5000
const dbUrl = process.env.dbUrl||'mongodb+srv://AVladimir:w6JLsyns@cloudSystem.9cv9a.mongodb.net/cloudSystem?retryWrites=true&w=majority';
const corsMiddleware= require('./middleware/corsMiddleware');

const app=express();
app.use(corsMiddleware);
app.use(express.json());
app.use("/api/auth",authRouter);

const start= async ()=>{
    try{
        await mongoose.connect(dbUrl)
        app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))
    }catch(e){
        console.log(e);
    }
}

start();