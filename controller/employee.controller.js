const {EmployeeModel} = require("../models");


class EmployeeController{

 async getAll(req,res){
  const employees = await EmployeeModel.find();
  return res.send(employees);
 }

 async getOne(req,res){
     const {id} = req.params;
     const employee = await EmployeeModel.findById(id);
     return res.send(employee);
 }
 async create(req,res){
  const {body} = req;
  const employee = await EmployeeModel.create([body]);
  return res.send(employee);
 }

 async update(req,res){
    const {id} = req.params
    const {body} = req;
    const employee = await EmployeeModel.findByIdAndUpdate(id,body)
    return res.send(employee);
 }

 async delete(req,res){
    const {id} = req.params
    const employee = await EmployeeModel.findByIdAndDelete(id)
    return res.send(employee);
 }




}

module.exports = new EmployeeController();