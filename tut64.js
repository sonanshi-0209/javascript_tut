const fs = require("fs");
let text = fs.readFileSync("dele.txt", "utf-8");
text = text.replace("sonanshi", "rohan");

console.log("the content of file is");
console.log(text);

fs.writeFileSync("rohan.txt", text);
console.log("creating a new file");
