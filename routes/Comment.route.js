const { commentController } = require("../controllers/comment.controller")

const { Router } = require("express")
const authMiddleware = require("../models/middleware/auth.middleware")

const router = Router()

router.get("/comments", commentController.getComments)
router.get("/comments/:id", commentController.getCommentById)
router.post("/comments/:id", authMiddleware, commentController.postComment)
router.delete(
  "/comments/:id",
  authMiddleware,
  commentController.removeCommentById
)
router.patch(
  "/comments/:id",
  authMiddleware,
  commentController.patchCommentById
)

module.exports = router
