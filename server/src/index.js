// ... other imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from "morgan";
import router from "./routes/routes.js";
import cookieParser from "cookie-parser";

dotenv.config(); //for environment variables

const app = express(); // express app

// database connection
connectDB();

// middlewares
app.use(cookieParser()); // for cookies
app.use(express.urlencoded({ extended: true })); // to accept url encoded data
app.use(express.json()); // to accept json data
app.use(morgan("tiny")); // for logging
app.use(cors({ origin: "http://localhost:3000", credentials: true })); // Change this line

// routes
app.get("/", (req, res) => {
    res.send("Welcome to My Youtube Backend!");
});
app.use("/api", router);

app.listen(8000, () => {
    console.log("Server Started at http://localhost:8000"); // Corrected the port to 8000
});

export default app;
