const express = require('express');
const app  = express();

// router
const router = express.Router();

app.listen('5000', function(){
   console.log('server listening on port 5000');
});

app.use(express.json()); // functon middleware function
app.use(express.static('public')); // only want index.html to show public
const userRouter = express.Router();
const authRouter = express.Router();


app.use('/user' , userRouter);
app.use('/auth' , authRouter)
  // mounting in express
userRouter
.route('/')
.get(getUser)
.post(createUser)
.patch(updateUser)
.delete(deleteUser);

userRouter
.route(': id')
.get(getUserById);

authRouter
.route('/signup')
.post(signupUser);



let user = [];

// client <- server
//crud - create read update and delete
//read
app.get('/' , (req , res)=>{   
    res.send('Home Page');
});

//app.get('/user' , getUser);

function getUser(req , res){   
    res.json(user);
}

// post resquest 
// jab client server ko data bhejta ha 
// create 
//app.post('/user' , createUser);

function createUser(req , res){
    user = req.body;
    console.log(req.body);
    res.send('data has been added sucessfully');
}

//update 
//app.patch('/user' ,updateUser);

function updateUser(req , res){
    let obj = req.body;
    for(let key in obj ){
        user[key] = obj[key];
    }
    res.json(user);
}

// delete 
//app.delete('/user' , deleteUser);

function deleteUser(req , res){
    user ={};
    res.json(user);
}

// param route
app.get('/user/:id' ,getUserById);

function getUserById (req , res){
    console.log(req.params);
    res.send(req.params.id);
   
   }


function signupUser(req , res){
    let userDetails = req.body;    // destructing using let{email , name , password} = req.body;
    let name = userDetails.name;
    let email = userDetails.email;
    let password = userDetails.password;
    user.push({email , name , password});

    console.log('user' , req.body);
    res.json({
           message: 'user signedUp',
           user: req.body
    });
}









