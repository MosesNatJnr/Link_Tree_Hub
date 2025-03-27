import express from "express";
import { login, register } from "../controllers/authControllers.js";
import { verifyToken } from "../middlewaress/verifyToken.js";
import { linkProfile, profile } from "../controllers/userControllers.js";

const route = express.Router();

route.get("/profile", verifyToken, profile);
route.post("/add-link");
route.delete("/:title");




route.post("/register", register);
route.post("/login", login);
route.get("/profile/:username", linkProfile);


export default route;