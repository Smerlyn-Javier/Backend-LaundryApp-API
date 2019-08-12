const router = require("express").Router();
const {PlanController} = require("../controller")

router.get("",PlanController.getAll);
router.post("",PlanController.create);
router.get("/:id",PlanController.getOne);
router.put("/:id",PlanController.update);
router.delete("/:id",PlanController.delete);

module.exports = router;