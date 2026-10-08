// import http from "http";
// import fs from "fs";

// function handler(req,res)
// {
//     if(req.url === "/todos")
//     {
//         if(req.method === "GET")
//         {
//             const data = fs.readFileSync("src/todos.json","utf8");
//             res.end(data);
//         }
//         else if(req.method === "POST")
//         {
//             const data = fs.readFileSync("src/todos.json","utf8");
//             const dataObj = JSON.parse(data);
//             console.log(dataObj);
//             // console.log(req.body); //this is nor right

//             req.on("data",function(chunk){
//                 const todoStr = chunk.toString();
//                 const todoObj = JSON.parse(todoStr);

//                 dataObj.push(todoObj);
//                 fs.writeFileSync("src/todos.json",JSON.stringify(dataObj));
//                 const response = {
//                     success: true,
//                     message: "the todo is inserted succesfully",
//                     error : null
//                 };

//                 res.end(JSON.stringify(response));
//             });
//         }
//     }
//     else
//     {
//         res.end("invalid endpoint");
//     }
// }

// const server = http.createServer(handler);

// server.listen(3001,function(){
//     console.log("server is running on port 3001");
// })

// im



import express from "express";

const app = express();
app.use(express.json());

app.get("/todos",function(req,res){
res.end("this is gety request");
})

app.post("/todos",function(req,res){
res.end("tjhis is post requet");
})

app.listen(3001, function(){
    console.log("server is runngin");
})