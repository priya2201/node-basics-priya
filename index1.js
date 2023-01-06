
const http= require('http');

function dataControl(req,resp){
    resp.write("<h1> coding!!!!</h1>");
    resp.end();
}

// http.createServer((req,resp)=>{
//     resp.write("<h1> Hellooo nodejs developer </h1>");
//     resp.end();
// }).listen(4500);

http.createServer(dataControl).listen(4500);