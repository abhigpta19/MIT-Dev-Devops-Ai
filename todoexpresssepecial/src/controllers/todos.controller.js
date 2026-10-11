import {readAllTodos, getSingleInTodo, addInTodo, changeTitleInTodo} from "../repositories/todos.repository.js"

export function getAllTodos(req,res){
    try{
        const allTodos = readAllTodos();

        const response = {
            success: true,
            todos: allTodos,
            error: null
        };

        res.statusCode = 200;
        res.end(JSON.stringify(response));
    }
    catch(err)
    {
        console.log(err);
        const response = {
            success: false,
            todos: null,
            error: err.message
        }

        res.statusCode = 500;
        res.end(JSON.stringify(response));
    }
}

export function getSingleTodo(req,res)
{
    const id = parseInt(req.params.id);
    const filtedTodo = getSingleInTodo(id);

    const response = {
        success: true,
        filterTodo: filtedTodo,
        error: null
    }

    res.statusCode = 200;
    res.end(JSON.stringify(response));
}

export function addTodo(req,res)
{
    const userId = parseInt(req.query.userId);
    const bodyObj = req.body;

    const todoObj = {...bodyObj,userId};

    addInTodo(todoObj);

    res.statusCode = 201;
    res.end("todo updated successfully");
}

export function changeTitle(req,res)
{
    const body = req.body;

    changeTitleInTodo(body);

    res.end("your title has been updated successfully");
}