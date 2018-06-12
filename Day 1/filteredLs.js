var fs = require("fs")
var fileExt = process.argv[3]

fs.readdir(process.argv[2], (err, files) => {
	filterFiles(files)
})

filterFiles = (files) =>{
	filesArray = files.toString().split(',')

	for(var i = 0 ; i < filesArray.length; i++) {
		if(filesArray[i].indexOf("." + fileExt) != -1) {
			console.log(filesArray[i]);
		}
	}

}