import fs from "fs";

export function readAllTodos()
{
    const data = fs.readFileSync("src/db/todos.json","utf8");
    const dataObj = JSON.parse(data);

    const allTodos = dataObj.todos;
    return allTodos;
}

export function writeInTodos(obj)
{
    fs.writeFileSync("src/db/todos.json", JSON.stringify(obj));
}

export function addInTodo(todoObj)
{
    const allTodos = readAllTodos();
    allTodos.push(todoObj);
    writeInTodos({todos: allTodos});
}

export function getSingleInTodo(id)
{
    const allTodos = readAllTodos();

    const filteredTodo = allTodos.filter(val=>{
        if(val.todoId === id)
            return true;

        return false;
    })

    return filteredTodo[0];
}

export function changeTitleInTodo({id,title})
{
    const allTodos = readAllTodos();

    const modifiedTodos = allTodos.map(val=>{
        if(val.todoId === id)
        {
            return {...val,title: title};
        }

        return {...val};
    });

    writeInTodos({todos: modifiedTodos});
}