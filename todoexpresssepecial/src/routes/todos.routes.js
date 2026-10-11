import express from "express";
import {getAllTodos, getSingleTodo, addTodo, changeTitle} from "../controllers/todos.controller.js"

const todoRouter = express.Router();

todoRouter.get("/", getAllTodos);
todoRouter.get("/:id", getSingleTodo);
todoRouter.post("/",addTodo);
todoRouter.put("/", changeTitle);

// todoRouter.patch("/");

// todoRouter.delete("/")

export default todoRouter;