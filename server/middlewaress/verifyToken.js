 import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const verifyToken = (req, res, next) => {
    let token;

    // Check for Bearer token in the Authorization header
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }

    // If no token is found, respond with an error
    if (!token) {
        return res.status(401).send("Not authorized, no token");
    }

    try {
        console.log("Found token");
        // Decode the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.id = decoded.id; // Attach userId to the request object
        next(); // Proceed to the next middleware
    } catch (error) {
        console.error("Token verification failed:", error); // Log the error for debugging
        return res.status(401).send("Not authorized, token failed");
    }
};