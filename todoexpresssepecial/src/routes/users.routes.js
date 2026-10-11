import express from "express";

const userRouter = express.Router();

userRouter.get("/",function(req,res){
    res.end("this is get inside users");
})

userRouter.post("/",function(req,res){
    res.end("this is post from users");
})

export default userRouter;