var fs = require('fs');
fs.readFile('firstexample.txt',function(err,data){
    if(err){
        console.log(err);
    }
    setTimeout(() =>{
     console.log("display after 2 second")   
    },2000);
});
console.log('Start here');