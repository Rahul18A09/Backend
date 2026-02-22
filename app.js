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
//     res.write("Hello Rahul From Node.js Server");
//     res.end();
// });

// server.listen(3000);


// const express  = require("express");
// const app  = express();

// app.get("/", (req, res) => {
//     res.send("Hello Rahul Bharada🚀")
// });

// app.listen(3000, () => console.log("Server running"));


// path module
const path = require("path");

console.log(path.basename(__filename));
console.log(path.extname(__filename));

// os module
const os = require("os");

console.log(os.platform());
console.log(os.freemem());








