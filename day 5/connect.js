var connect = require("connect");
var app = connect();
app.listen(9000);
function hello1(req, res, next){
	res.write("Hello World 1;");
	console.log("hello1");
	next();
}
function hello2(req, res, next){
	res.write("Hello World 3;");
	console.log("hello2");
	next();
}
function hello3(req, res, next){	
	next();
	res.end("Hello World 3;");
	console.log("hello3");
}
app.use(hello3);
app.use(hello1);
app.use(hello2);
console.log("Server Started on port! " + 9000);