//first callback function

// const fs=require("fs");
// const file= "file.txt"; //this file does not exists
// const ErrorFirstCallBack =  (err,data) =>{
//     if(err){
//         return console.log("Error:" + err);
//     }
//     else{
//         console.log("Fuction successfully Inserted");
//     }
// };
// fs.readFile(file,ErrorFirstCallBack);

// another first callback function
const fs=require('fs');
const file="firstexample.txt";
const ErrorFirstCallBack = (err,data) =>{
    if(err){
        return console.log(err);
    }
    else{
        console.log("function successfully Inserted");
        console.log("file content" + data.toString());
    }

};
fs.readFile(file,ErrorFirstCallBack);


