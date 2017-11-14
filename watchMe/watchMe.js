const fs = require("fs");
fs.writeFile("watch-me1.txt", "", err => {
  if (err) {
    console.log(err);
  }
})

fs.writeFile("watch-me2.txt", "", err => {
  if (err) {
    console.log(err);
  }
})
fs.watch("watch-me1.txt", (curr, prev) => {
  console.log(curr);
  console.log(prev);
})
