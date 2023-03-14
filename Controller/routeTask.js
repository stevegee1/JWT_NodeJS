//this module defines the functionalities in each route

const { customAPIError, createCustomError } = require("../Errors/customError");
const JWT = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
require("dotenv").config();

//this route function checks if the name and age field are present before signing
//else it sends a custom error
const loginpage = async (req, res, next) => {
  const { name, age } = req.body;
  if (name && age) {
    const token = await JWT.sign({ name, age }, process.env.password, {
      expiresIn: "30days",
    });
    console.log(token);
    res.send(token);
  }
  const x = createCustomError("name and age field are required", 404);
  next(x);
};

const Homepage = (req, res) => {
  res.send("this is the Homepage");
};

//this route is protected using auth.js middleware
//the middleware checks if the token submitted is valid
//before handling down the task for this route function
const updateDocument = asyncHandler(async (req, res, next) => {
  const decoded = req.decoded;
  res.status(200).json({ msg: `hello ${decoded.name}` });
});

module.exports = { loginpage, Homepage, updateDocument };
