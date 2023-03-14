
//this is the middleware that handles the exceptions within the routes
//through next or express-async error package

const { CustomAPIError } = require("../../Errors/customError")
const  {UnAuthorizedError}  = require("../../Errors/unAuthorizedError")

const errorHandler=(err,req,res,next)=>{
   
if (err instanceof UnAuthorizedError){
    return res.status(err.statusCode).json({message:err.message})
}
if (err instanceof CustomAPIError) {
  return res.status(err.statusCode).json({ message: err.message });
}
res.send("not handled")
}
module.exports=errorHandler