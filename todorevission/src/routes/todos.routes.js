import express from "express";
import {getAllData, postTodoData, putTitleTodo} from "../controllers/todos.controller.js";
import {checkTodosBodyMiddleware} from "../middlewares/todos.middleware.js";

const todoRouter = express.Router();

todoRouter.use(checkTodosBodyMiddleware);

todoRouter.get("/", getAllData);
todoRouter.post("/", postTodoData);
todoRouter.put("/", putTitleTodo);

export default todoRouter;