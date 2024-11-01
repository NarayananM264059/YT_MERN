import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost:27017");
        if (conn && conn.connection && conn.connection.host) {
            console.log(`MongoDB connected: ${conn.connection.host}`);
        } else {
            console.error("Error: Could not connect to MongoDB");
            process.exit(1);
        }
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        } else {
            console.error("Error: An unknown error occurred");
        }
        process.exit(1);
    }
};

export default connectDB;
