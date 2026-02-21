// console.log("Hello Rahul, Welcome  to Node.js");

// console.log("start");

// setTimeout(() => {
//     console.log("This is a timeout function");
// }, 2000);

// console.log("end");


// file system
// const fs = (require("fs"));

// fs.writeFileSync("test.txt", "Hello Rahul");



// HTTP Server
// const http  = require("http");

// const server = http.createServer((req, res) => {
//     res.end("Hello From Node.js Server");
// });

// server.listen(3000);


const express  = require("express");
const app  = express();

app.get("/", (req, res) => {
    res.send("Hello Rahul 🚀")
});

app.listen(3000, () => console.log("Server running"));






