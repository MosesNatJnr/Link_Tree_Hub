import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import cors from 'cors'
import { connectdb } from "./db/db.js";
dotenv.config()
connectdb()

const app = express();

const port = process.env.PORT || 3000;
app.use(cors({
    origin: "*"
}))
app.use(express.json())
app.use("/api/user", userRoutes)
console.log("Hello")


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`http://localhost:${port}`);
})