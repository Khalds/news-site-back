const { newsController } = require("../controllers/news.controller")

const { Router } = require("express")

const router = Router()

router.get("/news", newsController.getNews)
router.get("/new/:id", newsController.getNewsById)
router.post("/news", newsController.postNews)
router.delete("/news/:id", newsController.removeNewsById)
router.patch("/news/:id", newsController.patchNewsById)

module.exports = router
