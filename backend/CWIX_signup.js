import mongoose from "mongoose";

const signupschema = new mongoose.Schema({
FullName :{
type : String,
required : true
},
EmailAddress:{
type : String,
required : true
},
Password:{
type : String,
required : true,
unique : true
},
ConfirmPassword :{
type : String,
required : true
},

},{timestamps:true})

export const Signup = mongoose.model("Signup",signinschema)