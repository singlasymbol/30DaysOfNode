var fs = require("fs")
var finalString = ""
fs.readFile(process.argv[2], (error,data) => {
	if(error) {

	} else {
		console.log(data.toString().split("\n").length - 1)
	}
})