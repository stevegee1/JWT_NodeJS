const express = require("express");
const app = express();
const router = require("./Route_model/Route");
const errorHandler = require("./middleware/errorHandler/errorHandler");
//changing the middleware properly is crucial especially in the case of handling error
app.use(express.json());

app.use(router);
app.use(errorHandler);
const PORT = 5000;
app.listen(PORT, console.log("we are here"));
