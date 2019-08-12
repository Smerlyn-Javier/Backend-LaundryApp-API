const {PlanModel} = require("../models");


class PlanController{

 async getAll(req,res){
  const plans = await PlanModel.find();
  return res.send(plans);
 }

 async getOne(req,res){
     const {id} = req.params;
     const plan = await PlanModel.findById(id);
     return res.send(plan);
 }
 async create(req,res){
  const {body} = req;
  const plan = await PlanModel.create([body]);
  return res.send(plan);
 }

 async update(req,res){
    const {id} = req.params
    const {body} = req;
    const plan = await PlanModel.findByIdAndUpdate(id,body)
    return res.send(plan);
 }

 async delete(req,res){
    const {id} = req.params
    const plan = await PlanModel.findByIdAndDelete(id)
    return res.send(plan);
 }




}

module.exports = new PlanController();