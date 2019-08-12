const router = require("express").Router();
const {IncludedServiceController} = require("../controller")

router.get("",IncludedServiceController.getAll);
router.post("",IncludedServiceController.create);
router.get("/:id",IncludedServiceController.getOne);
router.put("/:id",IncludedServiceController.update);
router.delete("/:id",IncludedServiceController.delete);

module.exports = router;