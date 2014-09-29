var a = require("./a");
console.log("a Inside b.js ");
console.log(a.calcArea());
console.log(a);
var b = 20;
exports.abc = b;