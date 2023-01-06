var fs= require('fs');
var data=fs.readFileSync('firstexample.txt');
console.log(data.toString());
console.log("end here");