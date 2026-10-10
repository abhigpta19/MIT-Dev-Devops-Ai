import express from "express";
import {getAllTodos, addTodo, getSingleTodo} from "../controllers/todos.controllers.js"

const router = express.Router();

router.get("/", getAllTodos);
router.post("/",addTodo);
router.get("/:id", getSingleTodo);

export default router;