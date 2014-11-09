var http = require("http");
var fs = require("fs");
var svr = http.createServer(function(req, res){
	fs.writeFile(__dirname + "/test/abc.txt", "Hello World", function (err) {
		console.log("err in Writing");
		console.log(err);
        if (err) {
            console.log("err");
            console.log(err);
            //callback(err, null);
			fs.mkdir(__dirname + "/test", function(err){
				console.log("err in Dir Creation");
				console.log(err);
			});
        }
        else{
            console.log('It\'s saved!');
            //callback(null, fileName);
        }
    });
	
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