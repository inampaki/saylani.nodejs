var http = require("http");
var fs = require("fs");
var svr = http.createServer(function(req, res){
	fs.readFile("./1.html", function(err, data){
		if(err){
			console.log("Error");
			console.log(err);
			res.end(err);
		}
		console.log(data);
		res.end(data);
	});
});
svr.listen(7000);
console.log("Server Started!");