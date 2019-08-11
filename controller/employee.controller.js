const {EmployeeModel} = require("../models");


class EmployeeController{

 async getallEmployee(req,res){
  const employees = await EmployeeModel.find();
  return res.send(employees);
 }
 async createEmployee(req,res){
  const {body} = req;
  const employee = await EmployeeModel.create([body]);
  return res.send(employee);
 }


}

module.exports = new EmployeeController();