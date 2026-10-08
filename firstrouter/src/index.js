// import http from "node:http";
// import url from "url"

// function handler(req,res)
// {
//     if(req.url === "/favicon.ico" || req.url.startsWith("/.well-known"))
//         return;
   
//     console.log(req.url);
//     const urlObj = url.parse(req.url, true);
//     console.log(urlObj);

//     if(urlObj.query.name)
//     {
//         res.end(`This is the data of ${urlObj.query.name}`)
//     }
//     else{
//         res.end("no name has been provided");
//     }
// }

// const server = http.createServer(handler);

// server.listen(3001,function(){
//     console.log("the server started:  3001")
// })


import http from "http";
import url from "url";

const server = http.createServer(function(req,res){
    const reqObj = url.parse(req.url,true);
    if(reqObj.pathname === "/tradingdata")
    {
        if(req.method === "GET")
        {
            res.end("this is a get request on tradingdata");
        }
        else if(req.method === "POST")
        {
            res.end("this is the post request form trading data");
        }
        else
        {
            res.end("this is invalid method");
        }
    }
});

server.listen(3001,()=>{
    console.log("server started : 3001");
})