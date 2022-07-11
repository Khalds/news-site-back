const { categoryController } = require("../controllers/category.controller")

const { Router } = require("express")

const router = Router()

router.get("/category", categoryController.getCategory)
router.post("/category", categoryController.postCategory)
router.delete("/category/:id", categoryController.removeCategoryById)
router.patch("/category/:id", categoryController.patchCategoryById)

module.exports = router
