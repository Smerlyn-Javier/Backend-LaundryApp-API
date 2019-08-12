const {ServiceModel} = require("../models");


class ServiceController{

 async getAll(req,res){
  const services = await ServiceModel.find();
  return res.send(services);
 }

 async getOne(req,res){
     const {id} = req.params;
     const service = await ServiceModel.findById(id);
     return res.send(service);
 }
 async create(req,res){
  const {body} = req;
  const service = await ServiceModel.create([body]);
  return res.send(service);
 }

 async update(req,res){
    const {id} = req.params
    const {body} = req;
    const service = await ServiceModel.findByIdAndUpdate(id,body)
    return res.send(service);
 }

 async delete(req,res){
    const {id} = req.params
    const service = await ServiceModel.findByIdAndDelete(id)
    return res.send(service);
 }




}

module.exports = new ServiceController();