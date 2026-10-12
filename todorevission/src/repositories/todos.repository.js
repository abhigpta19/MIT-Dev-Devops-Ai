import fs from "fs";

export function readAllTodos()
{
    const data = fs.readFileSync("src/db/todos.db.json", "utf8");
    const dataObj = JSON.parse(data);

    return dataObj.todos;
}

export function writeInTodos(obj)
{
    fs.writeFileSync("src/db/todos.db.json", JSON.stringify(obj));
}

export function addInTodo(todoObj)
{
    const allTodos = readAllTodos();
    allTodos.push(todoObj);
    writeInTodos({todos: allTodos});
}