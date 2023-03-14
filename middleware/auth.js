

//this is the middleware that protects our specified routes
const JWT = require("jsonwebtoken");
const {UnAuthorizedError}= require("../Errors/unAuthorizedError")
require("dotenv").config();
const loginAuth= (req,res,next)=>{
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];
  console.log(token);

  //try and catch can be avoided while considering async functio 
  // by using express-async-error package to automatically catch async error
  try {
    var decoded = JWT.verify(token, process.env.password);
    req.decoded=decoded
    next()
    //res.status(200).json({ msg: `hello ${decoded.name}` });
  } catch (err) {
    // const x=creteCustomError("you are wrong", 404)
    // next( x)
   const x= new UnAuthorizedError("auth error")
   next(x)
    //next(authError)
    //res.status(400).send("not allowed to view");
  }

}
module.exports=loginAuth