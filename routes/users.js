const router = require("express").Router();
const user = require("../controllers/users");

router.get("/", user.getAll);
router.get("/:id", user.get);
router.post("/", user.create);
router.patch("/:id", user.update);
router.delete("/:id", user.delete);

module.exports = router;
