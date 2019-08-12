const router = require("express").Router();
const {ColorController} = require("../controller")

router.get("",ColorController.getAll);
router.post("",ColorController.create);
router.get("/:id",ColorController.getOne);
router.put("/:id",ColorController.update);
router.delete("/:id",ColorController.delete);

module.exports = router;