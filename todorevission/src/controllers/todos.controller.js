import { readAllTodos, addInTodo } from "../repositories/todos.repository.js";

export function getAllData(req,res)
{
    const allTodos = readAllTodos();

    res.end(JSON.stringify({allTodos}));
}

export function getSingleData(req,res)
{

}

export function postTodoData(req,res)
{
    const userId = parseInt(req.query.id);
    const bodyObj = req.body;

    const todoObj = {...bodyObj, userId};

    addInTodo(todoObj);

    res.end("todo updated successfully");
}

export function putTitleTodo(req,res)
{

}

export function patchChangeStatus(req,res)
{

}

export function deleteSingleTodo(req,res)
{

}