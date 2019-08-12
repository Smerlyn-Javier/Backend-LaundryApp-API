const router = require("express").Router();
const {CategoryPiceController} = require("../controller")

router.get("",CategoryPiceController.getAll);
router.post("",CategoryPiceController.create);
router.get("/:id",CategoryPiceController.getOne);
router.put("/:id",CategoryPiceController.update);
router.delete("/:id",CategoryPiceController.delete);

module.exports = router;