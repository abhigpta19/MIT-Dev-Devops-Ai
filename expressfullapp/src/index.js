// import express from "express";

// const app = express();

// // function fn(req,res,next)
// // {
// //     req.on("data",function(chunk){
// //         const dataStr = chunk.toString();
// //         const dataObj = JSON.parse(dataStr);
// //         req.body = dataObj;
// //         next();
// //     })
// // }
// // app.use(fn);

// function requestLogger(req,res,next)
// {
//     console.log(req.url, req.method);
//     if(req.method !== "GET")
//     {
//         console.log(req.body);
//     }

//     next();


//     console.log("response added succesfully")
// }

// app.use(express.json());
// app.use(requestLogger);

// app.get("/todos",function(req,res){
//     res.end("this is get route of todos");
// })

// app.post("/todos",function(req,res){
//     res.end("your reponse is received suucessfully");
// })

// app.listen(3001,()=>{
//     console.log("server is running on port 3001");
// })



import express from "express";
import userRouter from "./routes/users.routes.js";
import todoRouter from "./routes/todos.routes.js";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/users", userRouter);
app.use("/todos", todoRouter);


app.get("/health",function(req,res){
    res.end(`The server is healthy`);
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port : ${PORT}`)
})