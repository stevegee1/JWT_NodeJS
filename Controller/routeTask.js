const JWT= require("jsonwebtoken");
const asyncHandler= require("express-async-handler")
require("dotenv").config()

const loginpage= async(req,res)=>{
  const { name, age } = req.body;
  if (name && age) {
    const token = await JWT.sign({ name, age }, process.env.password,{expiresIn:"30days"});
    console.log(token);
    res.send(token);
  }
}
const Homepage = (req, res) => {
  res.send("this is the Homepage");
};
const updateDocument =asyncHandler(async (req, res,next) => {
  const decoded=req.decoded
  res.status(200).json({ msg: `hello ${decoded.name}` });
})

module.exports= {loginpage,Homepage,updateDocument}
