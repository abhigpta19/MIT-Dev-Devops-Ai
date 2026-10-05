// console.log("hello");
// const {add,sub} = require("./utils/math.js")

// import xyz,{add, sub, value} from "./utils/math.js";
// import fs from "fs";

// console.log(xyz);
// console.log(value);

import http from "http";
import fs from "fs";

const value = `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>this is the response from node js seever</h1>
    <p>this is response yeah;;;</p>
</body>
</html>`;

const server = http.createServer(function(req,res){
    const url = req.url;

    if(url == "/")
    {
        const homeHtml = fs.readFileSync("src/pages/home.html","utf8");
        res.end(homeHtml);
    }
    else if(url == "/about")
    {
        const aboutHtml = fs.readFileSync("src/pages/about.html","utf8")
        res.end(aboutHtml);
    }
    else if(url == "/contact")
    {
        const contactHtml = fs.readFileSync("src/pages/contact.html","utf8")
        res.end(contactHtml);
    }
    else
    {
        const notfound = fs.readFileSync(
            "src/pages/notfound.html","utf8"
        )
        res.end(notfound);
    }
});

server.listen(3001,function(){
    console.log("server started on port 3001");
});