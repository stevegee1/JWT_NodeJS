const {CustomAPIError}=require("./customError")
const {getStatusCode}= require("http-status-codes");
class UnAuthorizedError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = getStatusCode("Unauthorized");
  }
}
const creteCustomError = (msg) => {
  return new UnAuthorizedError(msg);
};
module.exports={UnAuthorizedError, creteCustomError}