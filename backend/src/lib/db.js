import mongoose from "mongoose";
import {ENV} from "./env.js";

export const connectDB= async() =>{

    try{
        
        const conn=await mongoose.connect(ENV.MONGO_URL)
        console.log("MongoDB connected successfully", conn.connection.host );
    }
    catch(error){
        console.log("Error in connecting to MongoDB", error);
        process.exit(1); // 1 is fail 0 is Success

    }
}

export default connectDB;