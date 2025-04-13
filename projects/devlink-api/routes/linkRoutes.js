const express = require("express");
const router = express.Router();

const linkController = require("../controllers/linkController")

router.get("/", linkController.todos_get);
router.post("/", linkController.todos_post);
router.put("/update/:id", linkController.update_post)
router.delete("/delete/:id", linkController.delete_func);

module.exports = router;
