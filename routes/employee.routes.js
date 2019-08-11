const router = require("express").Router();
const {EmployeeController} = require("../controller")

router.post("",EmployeeController.createEmployee);

module.exports = router;