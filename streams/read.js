let fs=require('fs');
let data='';
// create a readable stream
let readerStream=fs.createReadStream('input.txt');
//set encoding to utf-8
readerStream.setEncoding('utf8');
// handle stream events
// data,end,error
readerStream.on('data',function(chunk){
    data+=chunk;
})
readerStream.on('end',function(){
    console.log(data);
})
readerStream.on('error',function(err){
    console.log(err.stack)
})
console.log('program ended!')