//difference exports and module.exports
var abc = require("./abc");
console.log(abc);

/*for(var myVar = 0; myVar < 30; myVar++){
	console.log("Inside For " + myVar);
}*/

var http = require("http");
var requestNumber = 1;
var mudassir = http.createServer(function(req, shehzad){
	if(req.url == "/favicon.ico"){
		shehzad.end();
		return;
	}
	var myLocalVar = 10;
	console.log(req.url);
	console.log(req.method);
	console.log("Inside Server");
	//console.log("Inside Call back myVar Value = " + myVar);
	shehzad.end("This is Request Number " + requestNumber++);
	//res.end();
});
mudassir.listen(7000);
console.log("Server Started!");