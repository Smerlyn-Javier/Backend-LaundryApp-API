const router = require("express").Router();
const {ServiceController} = require("../controller")

router.get("",ServiceController.getAll);
router.post("",ServiceController.create);
router.get("/:id",ServiceController.getOne);
router.put("/:id",ServiceController.update);
router.delete("/:id",ServiceController.delete);

module.exports = router;