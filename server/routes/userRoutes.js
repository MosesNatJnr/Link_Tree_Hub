import express from "express";
import { login, register } from "../controllers/authControllers.js";
import { verifyToken } from "../middlewaress/verifyToken.js";
import { linkProfile, profile } from "../controllers/userControllers.js";
import { addLink, deleteLink } from "../controllers/linkControllers.js";

const route = express.Router();

route.get("/profile", verifyToken, profile);
route.post("/add-link", verifyToken, addLink);
route.delete("/delete/:title", verifyToken, deleteLink);




route.post("/register", register);
route.post("/login", login);
route.get("/profile/:userName", linkProfile);


export default route;