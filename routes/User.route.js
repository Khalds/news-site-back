const { userController } = require("../controllers/user.controller")
const { Router } = require("express")
const authMiddleware = require("../models/middleware/auth.middleware")

const router = Router()

router.get("/users", authMiddleware, userController.getAllUsers)
router.post("/users", authMiddleware, userController.registerUser)
router.post("/login", authMiddleware, userController.loginUser)

module.exports = router
