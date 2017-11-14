const listOfFiles = (readDir, fileExtension) => {
  const path = require("path");
  const fs = require("fs");
  fs.readdir(readDir, (err,data) => {
    err? console.log(err) :data;
    for (var i = 0; i < data.length; i++) {
      var eachFile = data[i];
      if (path.extname(eachFile) === "."+fileExtension) {
        console.log(eachFile);
      }
    }
  })
}
listOfFiles("../..", "txt");
