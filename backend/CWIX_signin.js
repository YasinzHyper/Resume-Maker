import mongoose from "mongoose";

const signinschema = new mongoose.Schema({
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

},{timestamps:true})

export const Signin = mongoose.model("Signin",signinschema)