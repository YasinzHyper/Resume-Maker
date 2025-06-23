const Usermodel = require("./CWIX_signup");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const signup = async(req,res) =>{
try{
const{name,email,password}=req.body;
const user = await Usermodel.findone({email});
if(user){
return res.status(409).json({message:'user already exist',success :false})
}
const usermodel = new Usermodel({name,email,password})
usermodel.password = await bcrypt.hash(password,10);
await usermodel.save();
res.status(201).json({message :"signup successfully",success:true})
}
catch(error){
res.status(500).json({message:"invalid",success:false})
}
}

const Usermodel = require("./CWIX_signup");
const bcrypt = require('bcrypt');
const errmsg = 'email is invalid or password is wrong';
const signin = async(req,res) =>{
try{
const{email,password}=req.body;
const user = await Usermodel.findone({email});
if(!user){
return res.status(403).json({message: errmsg,success :false})
}
const ispassequal = await bcrypt.compare(password,user.password);
if(!ispassequal){
return res.status(403).json({message: errmsg,success :false})
}
const jwttoke = jwt.sign({email:user.email,_id:user._id},
process.env.JWT_SECRET,
{expiresin: '24h'}
)
res.status(200).json({message :"signin successfully",success:true,jwttoke,email,name:user.name})
}
catch(error){
res.status(500).json({message:"invalid",success:false})
}
}