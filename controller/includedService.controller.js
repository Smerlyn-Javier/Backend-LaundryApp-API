const {IncludeServiceModel} = require("../models");


class IncludeServiceController{

 async getAll(req,res){
  const includeServices = await IncludeServiceModel.find();
  return res.send(includeServices);
 }

 async getOne(req,res){
     const {id} = req.params;
     const includeService = await IncludeServiceModel.findById(id);
     return res.send(includeService);
 }
 async create(req,res){
  const {body} = req;
  const includeService = await IncludeServiceModel.create([body]);
  return res.send(includeService);
 }

 async update(req,res){
    const {id} = req.params
    const {body} = req;
    const includeService = await IncludeServiceModel.findByIdAndUpdate(id,body)
    return res.send(includeService);
 }

 async delete(req,res){
    const {id} = req.params
    const includeService = await IncludeServiceModel.findByIdAndDelete(id)
    return res.send(includeService);
 }




}

module.exports = new IncludeServiceController();