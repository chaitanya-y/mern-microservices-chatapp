import express from "express";
import { getAllUsers, getAUser, loginUser, myProfile, updateName, verifyUser } from "../controllers/user.js";
import { isAuth } from "../middlewares/isAuth.js";

const router = express.Router();
router.post('/login', loginUser);
router.post('/verify', verifyUser);
router.get('/profile',isAuth, myProfile);
router.get("/users/all", isAuth, getAllUsers);
router.get("/user/:id", getAUser);
router.post("/update/user", isAuth, updateName);
export default router;