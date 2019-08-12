const {NameServiceModel} = require("../models");


class NameServiceController{

 async getAll(req,res){
  const nameServices = await NameServiceModel.find();
  return res.send(nameServices);
 }

 async getOne(req,res){
     const {id} = req.params;
     const nameServices = await NameServiceModel.findById(id);
     return res.send(nameServices);
 }
 async create(req,res){
  const {body} = req;
  const nameServices = await NameServiceModel.create([body]);
  return res.send(nameServices);
 }

 async update(req,res){
    const {id} = req.params
    const {body} = req;
    const nameServices = await NameServiceModel.findByIdAndUpdate(id,body)
    return res.send(nameServices);
 }

 async delete(req,res){
    const {id} = req.params
    const nameServices = await NameServiceModel.findByIdAndDelete(id)
    return res.send(nameServices);
 }




}

module.exports = new NameServiceController();