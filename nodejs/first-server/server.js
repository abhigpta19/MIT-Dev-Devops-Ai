// import http from "node:http";
// import fs from "node:fs";
// import path from "node:path";

// const ROOT = process.cwd();
// const PORT = 3000;

// const mimeTypes = {
//     ".html": "text/html; charset=utf-8",
//     ".css": "text/css; charset=utf-8",
//     ".js": "text/javascript; charset=utf-8",
//     ".json": "application/json; charset=utf-8",
//     ".png": "image/png",
//     ".jpg": "image/jpeg",
//     ".jpeg": "image/jpeg",
//     ".svg": "image/svg+xml",
//     ".txt": "text/plain; charset=utf-8"
// };

// const server = http.createServer((req, res) => {
//     const url = new URL(req.url, "http://localhost");

//     let pathname;

//     try {
//         pathname = decodeURIComponent(url.pathname);
//     } catch {
//         res.writeHead(400);
//         res.end("Invalid URL");
//         return;
//     }

//     if (req.method !== "GET" && req.method !== "HEAD") {
//         res.writeHead(405, { Allow: "GET, HEAD" });
//         res.end("Method Not Allowed");
//         return;
//     }

//     const filePath = path.resolve(ROOT, "." + pathname);

//     // Prevent access to files outside the served folder.
//     if (
//         filePath !== ROOT &&
//         !filePath.startsWith(ROOT + path.sep)
//     ) {
//         res.writeHead(403);
//         res.end("Forbidden");
//         return;
//     }

//     let target = filePath;

//     try {
//         if (fs.statSync(target).isDirectory()) {
//             target = path.join(target, "index.html");
//         }

//         const stat = fs.statSync(target);

//         if (!stat.isFile()) {
//             throw new Error("Not a file");
//         }

//         const contentType =
//             mimeTypes[path.extname(target).toLowerCase()] ??
//             "application/octet-stream";

//         res.writeHead(200, {
//             "Content-Type": contentType,
//             "Content-Length": stat.size
//         });

//         if (req.method === "HEAD") {
//             res.end();
//             return;
//         }

//         const stream = fs.createReadStream(target);

//         stream.on("error", () => {
//             if (!res.headersSent) res.writeHead(500);
//             res.end("Internal Server Error");
//         });

//         stream.pipe(res);
//     } catch {
//         res.writeHead(404, {
//             "Content-Type": "text/plain; charset=utf-8"
//         });
//         res.end("404 - File Not Found");
//     }
// });

// // 0.0.0.0 makes the server reachable through network interfaces.
// server.listen(PORT, "0.0.0.0", () => {
//     console.log(`Serving folder: ${ROOT}`);
//     console.log(`Local: http://localhost:${PORT}`);
//     console.log(`Listening on port ${PORT}`);
// });


// import http from "http";

// const htmlStr = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1>hello from the server</h1>
//     <p>this is the http server from the node app</p>
// </body>
// </html>`;

// const server = http.createServer((req,res)=>{
//     res.end(htmlStr);
// });

// server.listen(3001,()=>{
//     console.log("server is running on port 3001");
// })


import http from "http";

let students = [
    { id: 1, name: "Abhishek" },
    { id: 2, name: "Rahul" }
];

function sendJSON(res, statusCode, data) {
    res.writeHead(statusCode, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify(data));
}

function readBody(req, callback) {
    let body = "";

    req.on("data", chunk => {
        body += chunk;
    });

    req.on("end", () => {
        try {
            callback(null, JSON.parse(body));
        } catch {
            callback(new Error("Invalid JSON"));
        }
    });
}

const server = http.createServer((req, res) => {
    const url = new URL(req.url, "http://localhost:3000");
    const pathname = url.pathname;
    const method = req.method;

    // GET /students
    if (method === "GET" && pathname === "/students") {
        return sendJSON(res, 200, students);
    }

    // Split URL: /students/1 -> ["", "students", "1"]
    const parts = pathname.split("/");
    const id = Number(parts[2]);

    // Routes like /students/1
    if (parts[1] === "students" && parts.length === 3 && parts[2]) {
        const student = students.find(s => s.id === id);

        // GET /students/1
        if (method === "GET") {
            if (!student) {
                return sendJSON(res, 404, { error: "Student not found" });
            }

            return sendJSON(res, 200, student);
        }

        // PUT or PATCH /students/1
        if (method === "PUT" || method === "PATCH") {
            if (!student) {
                return sendJSON(res, 404, { error: "Student not found" });
            }

            return readBody(req, (err, body) => {
                if (err) {
                    return sendJSON(res, 400, { error: err.message });
                }

                if (typeof body.name !== "string" || !body.name.trim()) {
                    return sendJSON(res, 400, { error: "Name is required" });
                }

                student.name = body.name.trim();

                return sendJSON(res, 200, student);
            });
        }

        // DELETE /students/1
        if (method === "DELETE") {
            if (!student) {
                return sendJSON(res, 404, { error: "Student not found" });
            }

            students = students.filter(s => s.id !== id);

            return sendJSON(res, 200, { message: "Student deleted" });
        }

        return sendJSON(res, 405, { error: "Method not allowed" });
    }

    // POST /students
    if (method === "POST" && pathname === "/students") {
        return readBody(req, (err, body) => {
            if (err) {
                return sendJSON(res, 400, { error: err.message });
            }

            if (typeof body.name !== "string" || !body.name.trim()) {
                return sendJSON(res, 400, { error: "Name is required" });
            }

            const student = {
                id: Math.max(0, ...students.map(s => s.id)) + 1,
                name: body.name.trim()
            };

            students.push(student);

            return sendJSON(res, 201, student);
        });
    }

    return sendJSON(res, 404, { error: "Route not found" });
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});