const express = require("express")

const router = express.Router()

const linkController = require("../controllers/linkController")

router.get("/", linkController.get_links)
router.post("/", linkController.post_links)
router.get("/stats/total", linkController.total_posts)
router.get("/stats/today", linkController.todays_posts)

module.exports = router