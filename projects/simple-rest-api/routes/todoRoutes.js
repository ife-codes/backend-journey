const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todoController")

router.get("/", todoController.todos_get);
router.post("/", todoController.todos_post);
router.put("/update/:id", todoController.update_post)
router.delete("/delete/:id", todoController.delete_func);

module.exports = router;
