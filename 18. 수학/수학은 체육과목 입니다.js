const fs = require("fs");

const input = Number.parseInt(fs.readFileSync("/dev/stdin").toString().trim());

console.log(input * 4);
