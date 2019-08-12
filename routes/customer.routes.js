const router = require("express").Router();
const {CustomerController} = require("../controller")

router.get("",CustomerController.getAll);
router.post("",CustomerController.create);
router.get("/:id",CustomerController.getOne);
router.put("/:id",CustomerController.update);
router.delete("/:id",CustomerController.delete);

module.exports = router;