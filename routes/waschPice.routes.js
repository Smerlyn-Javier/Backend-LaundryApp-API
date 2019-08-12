const router = require("express").Router();
const {WaschPiceController} = require("../controller")

router.get("",WaschPiceController.getAll);
router.post("",WaschPiceController.create);
router.get("/:id",WaschPiceController.getOne);
router.put("/:id",WaschPiceController.update);
router.delete("/:id",WaschPiceController.delete);

module.exports = router;