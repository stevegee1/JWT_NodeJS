const express= require("express")
const app= express()
const router= require("./Route_model/Route")
const errorHandler = require("./middleware/errorHandler/errorHandler");
app.use(express.json())
app.use(errorHandler)
app.use(router)
const PORT=5000
app.listen(PORT, console.log("we are here"));
