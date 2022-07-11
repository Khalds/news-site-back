const { userController } = require("../controllers/user.controller")
const { Router } = require("express")

const router = Router()

router.get("/users", userController.getAllUsers)
router.post("/users", userController.registerUser)
router.post("/login", userController.loginUser)

module.exports = router
