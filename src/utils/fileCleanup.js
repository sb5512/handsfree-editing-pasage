const fs = require("fs");

// Read from file
var content;
// First I want to read the file
let filename = "TIMITsentence.txt";
fs.readFile(filename, "utf8", function read(err, data) {
  if (err) {
    throw err;
  }
  content = data;
  processFile(); // Or put the next step in a function and invoke it
});

function processFile() {
  let arr = content.split("\n");
  const arrTrimmed = arr.map(sentence =>
    sentence.replace(/[\n\r]/g, "").trim()
  );
  // now let us remove duplicate and write to file.
  const setCleanedDup = [...new Set(arrTrimmed)];
  const arrCleanedDup = [...setCleanedDup];

  // write to a new file named 2pac.txt
  var file = fs.createWriteStream("array.txt");
  file.on("error", function(err) {
    /* error handling */
  });
  arrCleanedDup.forEach(function(v) {
    file.write(v + "\n");
  });
  file.end();
}
