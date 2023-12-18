
//1. Create a setup for Express Web Server
//2. Configure a route name - Student
//3. Create a express app and configure in server.js to delegate routes with - "Student"
//4. Create API's in default setup - getStudentDetails - 
//Pass Student info like - Name, Age, Address, Session as query string
//5. Save this information received in #4  to a file named studentIfo using fs module async way
//6. Create a setup for webpack
//7. What is the purpose of babel, are most important configurations we get from webpack
//8. What is the purpose of -ReactDOM.createRoot

const express = require('express') // using express function to initilize express application function 
const app = express()
let fs = require("fs")
let path = require("path"), //path module of node framework
HtmlWebpackPlugin = require('html-webpack-plugin')

app.get('Student', function (req,res){                    
res.send('Hello World')

})


app.get('/getStudentDetails',  (req,res)=>{
    console.log("Name: ", req.query.name);
    console.log("Age:", req.query.age);
    console.log("Address: ", req.query.address);
    console.log("Session:", req.query.Session);
    res.send();

    let writerStream = fs.createWriteStream("Text.json","utf8");
    writerStream.write(JSON.stringify(req.query.name,req.query.age,req.query.address, req.query.Session));
    writerStream.end();

})
fs.readFile('Text.json','utf8',(err, fileData)=>{
            console.log("information" + fileData)
            let writerStream = fs.createWriteStream("Text.json","utf8");
            if (fileData) {           
                let oldData = JSON.parse(fileData)    
                console.log(oldData)
                writerStream.end();
            }else{
                    console.log('Doesnt work')
            }
    })


app.listen(3000)

console.log('API is running at http://localhost/3000')


//7. BABEL IS A TRANSPILER THAT CONVERTS JAVASCRIPT INTO ES6 JAVASCRIPT THAT CAN RUN ON OTHER BROWSERS. WEBPACK'S MOST IMPORTANT CONFIGURATIONS PERTAIN TO USING IMPORTS AND UTILITIES WITH NPM AS WELL AS 
//WRITE AND EXECUTE 


//8. -reactDOM.createroot IS USED FOR CREATING A SUPPLIED CONTAINER AND RETURNING THE ROOT WHICH CAN MAKE A REACT ELEMENT.