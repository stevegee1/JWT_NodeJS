
const JWT = require("jsonwebtoken");
const AuthEror= require("../Errors/unAuthorizedError")
require("dotenv").config();
const loginAuth= (req,res,next)=>{
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];
  console.log(token);

  try {
    var decoded = JWT.verify(token, process.env.password);
    req.decoded=decoded
    next()
    //res.status(200).json({ msg: `hello ${decoded.name}` });
  } catch (err) {
    const authError= new AuthEror("invalid token", 404)
    throw authError
    //next(authError)
    //res.status(400).send("not allowed to view");
  }

}
module.exports=loginAuth