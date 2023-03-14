const express= require("express")
const router= express.Router()
const {loginpage,updateDocument,Homepage}= require("../Controller/routeTask")
const loginAuth=require("../middleware/auth")
router.route("/").post(loginpage)
router.route("/HomePage").get(Homepage)
router.route("/updateDocumentPage").get(loginAuth,updateDocument);
module.exports=router
