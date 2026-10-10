import fs from "fs";

export function getAllUsers(req,res)
{
    const data = fs.readFileSync("src/db/users.json","utf8");
    res.end(data);
}