const express = require("express");
const router = express.Router();

const linkController = require("../controllers/linkController")

router.get("/", linkController.get_all_links);
router.get("/details/:id", linkController.get_link);
router.post("/", linkController.add_links);
router.put("/update/:id", linkController.update_link)
router.delete("/delete/:id", linkController.delete_link);

module.exports = router;
