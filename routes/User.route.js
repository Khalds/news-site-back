const { userController } = require("../controllers/user.controller")
const { Router } = require("express")

const router = Router()

router.get("/users", userController.getAllUsers)
router.post("/users", userController.registerUser)
router.delete("/users/:id", userController.removeUserById)
router.post("/login", userController.loginUser)
router.patch("/users/:id", userController.patchUserAdminById)

module.exports = router
