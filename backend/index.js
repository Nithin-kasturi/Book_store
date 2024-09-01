import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js';
import cors from 'cors';
const app=express();
app.use(cors());
app.use(express.json());
dotenv.config();
const PORT=process.env.PORT ||4000;
const URI=process.env.MONGO_DB_URL;
try {
    mongoose.connect(URI
        ,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        }
    )
    .then(()=>console.log("Connected to mongodb"))
    .catch((error)=>console.log(error));
} catch (error) {
    console.log(error);
}
app.get('/',(req,res)=>{
    res.send("Backend is working")
});
app.use('/user',userRoute);
app.use('/book',bookRoute);
app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`)
})