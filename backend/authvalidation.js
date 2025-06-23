const Joi = require('joi');

const signupvalidation = (req,resizeBy,next) =>{
const schema = Joi.object({
name : Joi.string().min(3).max(50).required(),
email : Joi.string().email().required(),
password : Joi.string().min(3).max(50).required()
});

const {error} = schema.validate(req.body);
if(error){
return res.status(400).json({message: 'request failed',error})
}

next();
}

const signinvalidation = (req,resizeBy,next) =>{
const schema = Joi.object({
email : Joi.string().email().required(),
password : Joi.string().min(3).max(50).required()
});

const {error} = schema.validate(req.body);
if(error){
return res.status(400).json({message: 'request failed',error})
}

next();
}

module.exports={
signup,
signin
}






