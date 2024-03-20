import express from 'express';
import mongoose from 'mongoose';



mongoose.connect('mongodb+srv://karuntech999:jpftCWCJsVr9UVRe@cluster0.ubvyiax.mongodb.net/mern-blog?retryWrites=true&w=majority&appName=Cluster0')
.then(
    ()=>{
        console.log('mongodb is connected');
    }
).catch((err)=>{
    console.log(err);
})


const app=express();
app.listen(3000,()=>{
    console.log('server is running on port 3000!');
});

