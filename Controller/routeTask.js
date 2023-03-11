const JWT= require("jsonwebtoken");
const asyncHandler= require("express-async-handler")

const loginpage= async(req,res)=>{
}
const Homepage = (req, res) => {
  res.send("this is the Homepage");
};
const updateDocument =asyncHandler(async (req, res,next) => {
  const {name,age,password}=req.body
  
    const token=   await JWT.sign({name,age},password,{algorithm:"HS256"})
    if (!token){
       return next()
    }
    res.send(token)
   
   
    
})

module.exports= {loginpage,Homepage,updateDocument}
