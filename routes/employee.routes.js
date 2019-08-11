const router = require("express").Router();
const {EmployeeController} = require("../controller")

router.get("",EmployeeController.getAll);
router.post("",EmployeeController.create);
router.get("/:id",EmployeeController.getOne);
router.put("/:id",EmployeeController.update);
router.delete("/:id",EmployeeController.delete);

module.exports = router;