const express = require("express")

const router = express.Router()

const linkController = require("../controllers/linkController")

router.get("/", linkController.get_links)
router.post("/", linkController.post_links)

module.exports = router