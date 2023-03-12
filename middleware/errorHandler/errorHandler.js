const errorHandler=(err,req,res,next)=>{
   if(err.message==="not found"){
    console.log("bitch")
   }
}
module.exports=errorHandler