import express from "express";
import {getAllTodos, postTodo } from "../controllers/todos.controllers.js"

const router = express.Router();

router.get("/", getAllTodos);
router.post("/", postTodo);
// router.get("/:id", getSingleTodo);
// router.put("/",changeTitle);
// router.delete("/:id", handleDelete);
// router.patch("/", changeStatus)

export default router;