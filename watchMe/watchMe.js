const fs = require("fs");
// fs.writeFile("watch-me1.txt", "", err => {
//   if (err) {
//     console.log(err);
//   }
// })
//
// fs.writeFile("watch-me2.txt", "", err => {
//   if (err) {
//     console.log(err);
//   }
// })

fs.watch("watch-me1.txt", (eventType, fileName) => {
  if (eventType === "change") {
    fs.readFile("watch-me1.txt", "utf8", (err, data) => {
      if (err) throw err;
      fs.writeFile("watch-me2.txt", data, err => {
        if (err) throw err;
        console.log("changed");
      })
    })
  }
})
