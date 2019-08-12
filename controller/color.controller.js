const {ColorModel} = require("../models");


class ColorController{

 async getAll(req,res){
  const colors = await ColorModel.find();
  return res.send(colors);
 }

 async getOne(req,res){
     const {id} = req.params;
     const color = await ColorModel.findById(id);
     return res.send(color);
 }
 async create(req,res){
  const {body} = req;
  const color = await ColorModel.create([body]);
  return res.send(color);
 }

 async update(req,res){
    const {id} = req.params
    const {body} = req;
    const color = await ColorModel.findByIdAndUpdate(id,body)
    return res.send(color);
 }

 async delete(req,res){
    const {id} = req.params
    const color = await ColorModel.findByIdAndDelete(id)
    return res.send(color);
 }




}

module.exports = new ColorController();