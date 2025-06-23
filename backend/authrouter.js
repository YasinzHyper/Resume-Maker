const { signup } = require('./authvalidation');
const {signupvalidation} =require('./authvalidation');
const { Router } = require('express').Router();

Router.post('/signin',(req,res)=>{
res.send('signin successfully')
});

Router.post('/signup',(req,res)=>{
res.send('signup successfully')
})
Router.post('/signin',signinvalidation,signin);
Router.post('/signup',signupvalidation,signup);
module.exports = Router;