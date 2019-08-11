const router = require("express").Router();
const {EmployeeController} = require("../controller")

router.get("",EmployeeController.getallEmployee);
router.post("",EmployeeController.createEmployee);
// router.post("",EmployeeController.createEmployee);
// router.post("",EmployeeController.createEmployee);

module.exports = router;