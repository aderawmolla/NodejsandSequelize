const express=require("express")
const router=express.Router()
const userController=require("../controller/userController")
router.get("/getUsers",userController.findAll)
router.get("/getUser/:id",userController.findOne)
router.put("/updateUser/:id",userController.update)
router.delete("/deleteUser/:id",userController.deletebyPk)
router.post("/createUser",userController.create)

module.exports=router