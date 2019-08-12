const router = require("express").Router();
const {StatusOrderController} = require("../controller")

router.get("",StatusOrderController.getAll);
router.post("",StatusOrderController.create);
router.get("/:id",StatusOrderController.getOne);
router.put("/:id",StatusOrderController.update);
router.delete("/:id",StatusOrderController.delete);

module.exports = router;