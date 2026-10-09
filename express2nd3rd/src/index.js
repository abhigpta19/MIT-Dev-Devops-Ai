// // import http from "http";
// // import fs from "fs";

// // function handler(req,res)
// // {   
// //     if(req.url === "/todos")
// //     {
// //         if(req.method === "GET")
// //         {
// //             const data = fs.readFileSync("src/todos.json","utf8");
// //             res.end(data);
// //         }
// //         else if(req.method === "POST")
// //         {
// //             const data = fs.readFileSync("src/todos.json","utf8");
// //             const allTodos = JSON.parse(data);

// //             req.on("data",function(chunk){
// //                 const body = chunk.toString();
// //                 const bodyObj = JSON.parse(body);
                
// //                 allTodos.push(bodyObj);
// //                 fs.writeFileSync("src/todos.json", JSON.stringify(allTodos));
// //                 res.end("todos updated succesfully");
// //             })
// //         }
// //     }
// //     else if(req.url === "/users")
// //     {
// //         req.end("this is users endpoint");
// //     }
// //     else
// //     {
// //         res.end("invalid path");
// //     }
// // }

// // const server = http.createServer(handler);

// // server.listen(3001, function(){
// //     console.log("server is running on port 3001");
// // })

// // import http from "http"
// import express from "express";
// import fs from "fs";

// const app = express();

// // function fn(req,res,next)
// // {
// //     console.log("this is a middleware");
// //     next();
// // }
// app.use(express.json());

// app.get("/todos",function(req,res){
//     const data = fs.readFileSync("src/todos.json","utf8");
//     res.end(data);
// })

// app.post("/todos",function(req,res){
//     const data = fs.readFileSync("src/todos.json","utf8");
//     const allTodos = JSON.parse(data);
//     const body = req.body;
//     console.log(typeof body);
//     allTodos.push(body);
//     fs.writeFileSync("src/todos.json",JSON.stringify(allTodos));
//     res.end("todo updated succesfylly");
// })

// // const server = http.createServer(app);

// app.listen(3001,()=>{console.log("server started")});



import express from "express";

const app = express();
app.use(express.json());

app.get("/todos",function(req,res){
    
})

app.listen(3001,function(){
    console.log("server is listening");
})