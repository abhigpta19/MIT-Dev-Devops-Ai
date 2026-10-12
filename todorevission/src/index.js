import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/users.routes.js";
import todoRouter from "./routes/todos.routes.js";
dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/todos", todoRouter);
app.use("/users", userRouter);

app.listen(PORT, ()=>{
    console.log((`Server is running on port : ${PORT}`));
})