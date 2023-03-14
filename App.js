
//imports
const express = require("express");
const app = express();
const router = require("./Route_model/Route");
const errorHandler = require("./middleware/errorHandler/errorHandler");


//changing the middleware properly is crucial especially in the case of handling error

//middlewares
app.use(express.json());
app.use(router);
app.use(errorHandler);

//specified ports
const PORT = 5000;

//starting the server
app.listen(PORT, console.log("we are here"));
