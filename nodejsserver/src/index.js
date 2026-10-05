// console.log("starting the file");
// const value = require("./utils/math.js")

// import xyz,{add , sub} from "./utils/math.js";
// console.log(xyz);
// console.log(sub(4,5));

//fs path os

import http from "http";
import fs from "fs";

// const value = fs.readFileSync("src/pages/home.html","utf8");
// console.log(value);

const value = {
    name:"abhishek",
    age:20,
    city:"delhi"    
};

const server = http.createServer(function(req,res){

    // res.end(value);
    const url = req.url;
    console.log(url);
    if(url=="/"){
        const homedata = fs.readFileSync("src/pages/home.html","utf8");
        res.end(JSON.stringify(value));
    }
    else if(url=="/about"){
        const aboutData = fs.readFileSync("src/pages/about.html","utf8");
        res.end(aboutData);
    }
    else if(url=="/contact"){
        const contactData = fs.readFileSync("src/pages/contact.html","utf8");
        res.end(contactData);

        "/users/name"
    }
    else if(url.startsWith("/users")){
        const name = url.split("/")[2];
        res.end(`<h1>Hello user: ${name}</h1>`);
    }
    else{
        const notFoundData = fs.readFileSync("src/pages/notfound.html","utf8");
        res.end(notFoundData);
    }
});

server.listen(3001,function(){
    console.log("the server has been started at port 3001");
});

// console.log(20);
