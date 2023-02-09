let fs=require('fs');
let data='here are event emitter which create and handle custom events and commonly evvents are data-for reading data,end-data not available, error- for handling errors read or write that error,finish- data is flushed there is no use of underlying system';
let writerStream=fs.createWriteStream('output.txt');
writerStream.write(data,'utf8');
// end of file
writerStream.end()
// handle stream events
writerStream.on('finish',function(){
    console.log('read data from output and then write in that file like finish event triggered-read and write')
});
writerStream.on('error',function(err){
    console.log(err.stack)
})
console.log('Program Ended!')