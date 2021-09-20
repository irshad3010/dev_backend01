const express = require('express');
const app  = express();

app.listen('5000', function(){
   console.log('server listening on port 5000');
});

app.use(express.json()); // functon middleware function

let user = {};

app.get('/' , (req , res)=>{   
    res.send('Home Page');
});

app.get('/user' , (req , res)=>{   
    res.json(user);
})

// post resquest 
// jab client server ko data bhejta ha 

app.post('/user' , (req , res)=>{
    user = req.body;
    console.log(req.body);
    res.send('data has been added sucessfully');
});

app.patch('/user' ,(req , res)=>{
    let obj = req.body;
    for(let key in obj ){
        user[key] = obj[key];
    }
    res.json(user);
})

app.delete('/user' , (req , res)=>{
    user ={};
    res.json(user);
})