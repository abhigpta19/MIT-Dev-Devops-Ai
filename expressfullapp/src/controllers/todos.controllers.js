// import fs from "fs";

// export function getAllTodos(req,res)
// {
//     const data = fs.readFileSync("src/db/todos.json","utf8");
//     res.end(data);
// }

// export function addTodo(req,res)
// {
//     const userId = parseInt(req.query.userId); //1234
//     const todo = req.body;  //{id,title,completed}

//     const todoItem = {...todo,userId};

//     const todosData = fs.readFileSync("src/db/todos.json","utf8");
//     const todosObj = JSON.parse(todosData);

//     todosObj.todos.push(todoItem);

//     fs.writeFileSync("src/db/todos.json", JSON.stringify(todosObj));
//     res.end("Item Added to Todo Succesfully");
// }

// export function getSingleTodo(req,res)
// {
//     const todoId = parseInt(req.params.id);

//     const data = fs.readFileSync("src/db/todos.json","utf8");
//     const dataObj = JSON.parse(data);

//     const allTodos = dataObj.todos;

//     const filterdTodo = allTodos.filter((val,idx)=>{
//         if(val.id === todoId)
//             return true;

//         return false;
//     });

//     res.end(JSON.stringify(filterdTodo[0]));
// }

// export function changeTitle(req,res)
// {
//     const body = req.body;

//     const data = fs.readFileSync("src/db/todos.json", "utf8");
//     const dataObj = JSON.parse(data);

//     const modifiedTodos = dataObj.todos.map((val,idx)=>{
//         if(body.id === val.id)
//         {
//             return {...val,title: body.title};
//         }

//         return {...val};
//     })

//     dataObj.todos = modifiedTodos;
//     fs.writeFileSync("src/db/todos.json",JSON.stringify(dataObj));
//     res.end("your todo is modified successfully");
// }

import { readAllTodos, addTodo } from "../repositories/todos.repository.js";

export function getAllTodos(req,res)
{
    try{
        const allTodos = readAllTodos();
    
        const response = {
            success: true,
            todos: allTodos,
            error : null
        }

        res.statusCode = 200;
        res.end(JSON.stringify(response));
    }
    catch(err)
    {
        console.log("error message" , err.message);
        const response = {
            success: false,
            reponse: null,
            error : err.message
        };
        res.statusCode = 500;
        res.end(JSON.stringify(response));
    }
}

export function postTodo(req, res)
{
    const userId = parseInt(req.query.userId);
    const todoBody = req.body;

    const todoItem = {...todoBody, userId};
    addTodo(todoItem);
    res.statusCode = 201;
    res.end("the todo is inserted");
}