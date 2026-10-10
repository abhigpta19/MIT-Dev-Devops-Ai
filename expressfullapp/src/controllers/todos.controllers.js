import fs from "fs";

export function getAllTodos(req,res)
{
    const data = fs.readFileSync("src/db/todos.json","utf8");
    res.end(data);
}

export function addTodo(req,res)
{
    const userId = parseInt(req.query.userId); //1234
    const todo = req.body;  //{id,title,completed}

    const todoItem = {...todo,userId};

    const todosData = fs.readFileSync("src/db/todos.json","utf8");
    const todosObj = JSON.parse(todosData);

    todosObj.todos.push(todoItem);

    fs.writeFileSync("src/db/todos.json", JSON.stringify(todosObj));
    res.end("Item Added to Todo Succesfully");
}

export function getSingleTodo(req,res)
{
    const todoId = parseInt(req.params.id);

    const data = fs.readFileSync("src/db/todos.json","utf8");
    const dataObj = JSON.parse(data);

    const allTodos = dataObj.todos;

    const filterdTodo = allTodos.filter((val,idx)=>{
        if(val.id === todoId)
            return true;

        return false;
    });

    res.end(JSON.stringify(filterdTodo[0]));
}