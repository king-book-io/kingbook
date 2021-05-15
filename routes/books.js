const router = require("express").Router();
const book = require("../controllers/books");

router.get("/", book.getAll);
router.get("/:id", book.get);
router.post("/", book.create);
router.patch("/", book.update);
router.delete("/:id", book.delete);

module.exports = router;
