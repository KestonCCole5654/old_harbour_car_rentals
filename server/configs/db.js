import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        mongoose.connection.on('connected', ()=> console.log("MongoDB connected"));
        mongoose.connection.on('error', (err)=> console.error("MongoDB connection error:", err.message));
        mongoose.connection.on('disconnected', ()=> console.warn("MongoDB disconnected"));

        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'car-rental',
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 45000,
            connectTimeoutMS: 30000,
            maxPoolSize: 10,
            minPoolSize: 5,
            maxIdleTimeMS: 30000
        })
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB;