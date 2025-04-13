const express = require("express");
const router = express.Router();

const linkController = require("../controllers/linkController")

<<<<<<< HEAD
router.get("/", linkController.get_all_links);
router.get("/details/:id", linkController.get_link);
router.post("/", linkController.add_links);
router.put("/update/:id", linkController.update_link)
router.delete("/delete/:id", linkController.delete_link);
=======
router.get("/", linkController.todos_get);
router.post("/", linkController.todos_post);
router.put("/update/:id", linkController.update_post)
router.delete("/delete/:id", linkController.delete_func);
>>>>>>> ea1b8a0dfb83d0d79c16e180ba98518066dfea43

module.exports = router;
