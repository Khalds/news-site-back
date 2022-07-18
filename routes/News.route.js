const { newsController } = require("../controllers/news.controller")

const { Router } = require("express")
const authMiddleware = require("../models/middleware/auth.middleware")

const router = Router()

router.get("/news", newsController.getNews)
router.get("/news/:id", newsController.getNewsById)
router.post("/news/", newsController.postNews)
router.delete("/news/:id", newsController.removeNewsById)
router.patch("/news/:id/like", authMiddleware, newsController.patchNewsLikeById)
router.patch(
  "/news/:id/dislike",
  authMiddleware,
  newsController.patchNewsDisLikeById
)

module.exports = router
