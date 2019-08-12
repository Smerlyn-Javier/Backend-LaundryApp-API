const {WashPiceModel} = require("../models");


class WashPiceController{

 async getAll(req,res){
  const washPices = await WashPiceModel.find();
  return res.send(washPices);
 }

 async getOne(req,res){
     const {id} = req.params;
     const washPice = await WashPiceModel.findById(id);
     return res.send(washPice);
 }
 async create(req,res){
  const {body} = req;
  const washPice = await WashPiceModel.create([body]);
  return res.send(washPice);
 }

 async update(req,res){
    const {id} = req.params
    const {body} = req;
    const washPice = await WashPiceModel.findByIdAndUpdate(id,body)
    return res.send(washPice);
 }

 async delete(req,res){
    const {id} = req.params
    const washPice = await WashPiceModel.findByIdAndDelete(id)
    return res.send(washPice);
 }




}

module.exports = new WashPiceController();