import fs from "fs";

export function readAllTodos()
{
    const data = fs.readFileSync("src/db/todos.json","utf8");
    const dataObj = JSON.parse(data);
    return dataObj.todos;
}

export function writeInTodo(dataObj)
{
    fs.writeFileSync("src/db/todos.json", JSON.stringify(dataObj));
}

export function addTodo(todo)
{
    const allTodos = readAllTodos();
    allTodos.push(todo);
    writeInTodo({todos: allTodos});
}

export function findSingleTodo(todoId)
{
    const allTodos = readAllTodos();
    const todoItem = allTodos.filter(val=>{
        if(val.id === todoId)
            return true;

        return false;
    })

    return todoItem[0];
}

export function modifyTodo({id,title})
{
    const allTodos = readAllTodos();

    const modifiedTodos = allTodos.map(val=>{
        if(val.id === id)
        {
            return {...val,title: title};
        }

        return {...val};
    });

    writeInTodo({todos: modifiedTodos});
}

export function deleteTodo(id)
{
    const allTodos = readAllTodos();

    const filteredTodos = allTodos.filter(val=>{
        if(val.id === id)
            return false;

        return true;
    })

    writeInTodo({todos: filteredTodos});
}

export function changeStatus({id,completed})
{
    const allTodos = readAllTodos();

    const modifiedTodos = allTodos.map(val=>{
        if(val.id === id)
        {
            return {...val,completed:completed};
        }

        return {...val};
    })
}