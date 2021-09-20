
const express = require('express');

//server creation
const app= express();
let port = '8080';

app.listen(port , function(){

    console.log(`server is listening on port  ${port} `);
});
// types of request -> get post put delete

app.get('/' , (req , res)=>{

    console.log(req.hostname);
    console.log(req.path);
    console.log(req.method);
    

   res.send('<h1> hello  from backend</h1>');
  // res.end();//for ending response 

});

let obj ={
   'name': 'Irshad'
}

// client jab server se magwata ah 

app.get('/user' , (req , res)=>{
    console.log('users');
     res.send(obj);
});

app.get('/home' , (req , res)=>{
    console.log('users');
     res.sendFile('./views/index.html' , {root:__dirname});
});

