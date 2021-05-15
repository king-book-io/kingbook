const router = require("express").Router();
const order = require("../controllers/orders");

router.get("/", order.getAll);
router.get("/:id", order.get);
router.post("/", order.create);
router.patch("/:id", order.update);
router.delete("/:id", order.delete);

module.exports = router;
