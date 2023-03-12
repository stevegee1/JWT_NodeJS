
const JWT = require("jsonwebtoken");
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
    res.status(400).send("not allowed to view");
  }

}
module.exports=loginAuth