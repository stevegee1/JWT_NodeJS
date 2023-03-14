const {CustomAPIError}=require("./customError")

class unAuthorizedError extends CustomAPIError {
  constructor(message, statusCode) {
    super(message, statusCode);
  }
}

module.exports=unAuthorizedError