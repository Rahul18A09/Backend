const fs = require("fs");

// sync...
// fs.writeFileSync("./test.txt", "Hello World"); 

// Async
// fs.writeFile("./test.txt", "HEllo World Async", (err) => {});

// fs.readFileSync("./contacts.txt", "utf8")
// const result = fs.readFileSync("./contacts.txt", "utf8");
// console.log(result);

// fs.readFileSync("./test.txt", "utf8")
// const ans = fs.readFileSync("./test.txt", "utf8");
// console.log(ans);

fs.readFile("./contacts.txt", "utf8", (err, result) => {
    if(err) {
        console.log("Error", err);
        
    } else {
        console.log("Result", result);
    }
});
