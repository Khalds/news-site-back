const { commentController } = require("../controllers/comment.controller")

const { Router } = require("express")

const router = Router()

router.get("/comment/:id", commentController.getCommentById)
router.post("/comment", commentController.postComment)
router.delete("/comment/:id", commentController.removeCommentById)
router.patch("/comment/:id", commentController.patchCommentById)

module.exports = router
