//Synchronous or blocking
//line by line execution

//Asynchronous or blocking
//-line by line execution not guaranteed
//callbacks will fire

const fs = require("fs");
let text = fs.readFileSync("dele.txt", "utf-8");
text = text.replace("sonanshi", "rohan");
