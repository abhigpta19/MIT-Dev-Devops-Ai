// import http from "http";
// import fs from "fs";

// function handler(req,res)
// {
//     console.log(req.method);
    
//     req.on("data",function(chunk){
//         console.log("this is my chunnk");
//         console.log(chunk.toString());
//     })

//     console.log("sending response");
//     res.end("this is my post request");

//     // const dataStr = fs.readFileSync("src/todos.json","utf8");
//     // const dataObj = JSON.parse(dataStr);
//     // const allTodos = dataObj.todos;
    
//     // const response = {
//     //     success: true,
//     //     todos: allTodos,
//     //     error: null
//     // };

//     // res.end(JSON.stringify(response));
// }

// const server = http.createServer(handler);

// server.listen(3001, function(){
//     console.log("this server is running");
// })


// import http from "http";
// import express from "express";

// const app = express();
// app.use(express.json());

// // function fn(req,res,next)
// // {
// //     req.on("data",function(chunk){
// //         const bodyStr = chunk.toString();
// //         const bodyObj = JSON.parse(bodyStr);
// //         req.body = bodyObj;
// //         next();
// //     })
// // }
// // app.use(fn);

// app.get("/todos",function(req,res){
//     console.log(req.method);
//     console.log(req.url);
//     res.end("this is from express server");
// })

// app.post("/todos",function(req,res){
//     console.log(req.method);
//     console.log(req.query);
//     console.log(req.body);
//     res.end("this is post from express");
// })

// // const server = http.createServer(app);

// app.listen(3001,()=>{
//     console.log("hellp world");
// })


import express from "express";
import fs from "fs";

const PORT = 3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/todos",function(req,res){
    const userId = parseInt(req.query.userId);
    const data = fs.readFileSync("src/todos.json", "utf8");
    const dataObj = JSON.parse(data);
    const allTodos = dataObj.todos;
    let filteredTodos = null;

    if(userId)
    {
        filteredTodos = allTodos.filter(val=>{
            if(val.userId == userId)
                return true;

            return false;
        })
    }
    else
    {
        filteredTodos = [...allTodos];
    }

    const response = {
        success: true,
        todos: filteredTodos,
        error: null
    }

    res.end(JSON.stringify(response));
});

app.post("/todos", function(req,res){
    const userId = parseInt(req.query.userId);
    const todoBody = req.body;
    const todoObj = {...todoBody,userId};

    const data = fs.readFileSync("src/todos.json", "utf8");
    const dataObj = JSON.parse(data);
    const allTodos = dataObj.todos;

    allTodos.push(todoObj);

    const finalObj = { todos : allTodos};
    fs.writeFileSync("src/todos.json", JSON.stringify(finalObj));
    
    res.end("your todo is added successfully");
})

app.listen(PORT,function(){
    console.log(`express sever is runnin on port ${PORT}`);
})