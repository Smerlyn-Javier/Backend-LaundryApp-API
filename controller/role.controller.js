const {RoleModel} = require("../models");


class PlanController{

 async getAll(req,res){
  const roles = await RoleModel.find();
  return res.send(roles);
 }

 async getOne(req,res){
     const {id} = req.params;
     const role = await RoleModel.findById(id);
     return res.send(role);
 }
 async create(req,res){
  const {body} = req;
  const role = await RoleModel.create([body]);
  return res.send(role);
 }

 async update(req,res){
    const {id} = req.params
    const {body} = req;
    const role = await RoleModel.findByIdAndUpdate(id,body)
    return res.send(role);
 }

 async delete(req,res){
    const {id} = req.params
    const role = await RoleModel.findByIdAndDelete(id)
    return res.send(role);
 }




}

module.exports = new PlanController();