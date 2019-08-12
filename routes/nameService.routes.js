const router = require("express").Router();
const {NameServiceController} = require("../controller")

router.get("",NameServiceController.getAll);
router.post("",NameServiceController.create);
router.get("/:id",NameServiceController.getOne);
router.put("/:id",NameServiceController.update);
router.delete("/:id",NameServiceController.delete);

module.exports = router;