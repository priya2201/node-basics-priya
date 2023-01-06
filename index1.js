
const http= require('http');

// function dataControl(req,resp){
//     resp.write("coding!!!");
    // resp.end();
 //}

http.createServer((req,resp)=>{
    resp.write("<h1> Hellooo nodejs developer </h1>");
    resp.end();
}).listen(3000);

//http.createServer(dataControl).listen(4500);