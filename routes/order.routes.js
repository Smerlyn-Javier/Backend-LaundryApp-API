const router = require("express").Router();
const {OrderController} = require("../controller")

router.get("",OrderController.getAll);
router.post("",OrderController.create);
router.get("/:id",OrderController.getOne);
router.put("/:id",OrderController.update);
router.delete("/:id",OrderController.delete);

module.exports = router;