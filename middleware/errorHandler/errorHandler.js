const { CustomAPIError } = require("../../Errors/customError")
const unAuthorizedError = require("../../Errors/unAuthorizedError")

const errorHandler=(err,req,res,next)=>{
if (err instanceof CustomAPIError){
    return res.status(err.statusCode).json({message:err.message})
}
if (err instanceof unAuthorizedError ){
  res.status(err.statusCode).json({message:err.message})
}
}
module.exports=errorHandler