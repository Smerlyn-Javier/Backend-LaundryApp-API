const {EmployeeModel} = require("../models");

class EmployeeController{

 async createEmployee(req,res){
  const {body} = req;
  const employee = await EmployeeModel.create([body]);
  return res.send(employee);
 }


}

module.exports = new EmployeeController();