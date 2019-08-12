const {CategoryPiceModel} = require("../models");


class CategoryPiceController{

 async getAll(req,res){
  const categoryPices = await CategoryPiceModel.find();
  return res.send(categoryPices);
 }

 async getOne(req,res){
     const {id} = req.params;
     const categoryPice = await CategoryPiceModel.findById(id);
     return res.send(categoryPice);
 }
 async create(req,res){
  const {body} = req;
  const categoryPice = await CategoryPiceModel.create([body]);
  return res.send(categoryPice);
 }

 async update(req,res){
    const {id} = req.params
    const {body} = req;
    const categoryPice = await CategoryPiceModel.findByIdAndUpdate(id,body)
    return res.send(categoryPice);
 }

 async delete(req,res){
    const {id} = req.params
    const categoryPice = await CategoryPiceModel.findByIdAndDelete(id)
    return res.send(categoryPice);
 }




}

module.exports = new CategoryPiceController();