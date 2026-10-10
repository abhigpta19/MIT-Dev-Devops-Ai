import express from "express";
import {getAllUsers} from "../controllers/users.controllers.js"

const router = express.Router();

router.get("/", getAllUsers);

export default router;