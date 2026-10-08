// import http from "http";
// import fs from "fs";

// function handler(req,res)
// {
//     // const resHtml = fs.readFileSync("src/pages/index.html","utf8");
//     // const resObj = {
//     //     name : "abc",
//     //     year: 3,
//     //     address : {
//     //         city: "mb",
//     //         pincode: "123456"
//     //     }
//     // };

//     // res.end(JSON.stringify(resObj));

//     const url = req.url;
//     if(url === "/home")
//     {
//         const home = fs.readFileSync("src/pages/index.html");
//         res.end(home);
//     }
//     else if(url === "/about")
//     {
//         const about = fs.readFileSync("src/pages/about.html");
//         res.end(about);
//     }
//     else if(url === "/contact")
//     {
//         const contact = fs.readFileSync("src/pages/contact.html");
//         res.end(contact);
//     }
//     else if(url === "/get-data")
//     {
//         const usersData = fs.readFileSync("src/data/users.json","utf8");
//         res.end(usersData);
//     }
//     else
//     {
//         const nf = fs.readFileSync("src/pages/notfound.html");
//         res.end(nf);
//     }
// }

import http from "node:http";
import urlmodule from "url";
import fs from "fs";

function handler(req,res)
{
    const url = req.url;
    const newUrl = urlmodule.parse(url,true);
    if(url.startsWith("/favicon") || url.startsWith("/.well-known"))
        return;

    const data = fs.readFileSync("src/data/users.json", "utf8");
    const dataObj = JSON.parse(data);

    const query = newUrl.query;
    console.log(query.id);
    if(!query.id)
    {
        res.end(data);
    }
    else
    {
        const filtered = dataObj.filter(function(val,idx){
            if(val.id == query.id)
                return true;

            return false;
        })

        res.end(JSON.stringify(filtered));
    }
}

const server = http.createServer(handler);

server.listen(3001,()=>{
    console.log("server has started on port 3001");
})