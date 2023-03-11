const express= require("express")
const router= express.Router()
const {loginpage,updateDocument,Homepage}= require("../Controller/routeTask")

router.route("/").get(loginpage)
router.route("/HomePage").get(Homepage)
router.route("/updateDocumentPage").post(updateDocument);
module.exports=router