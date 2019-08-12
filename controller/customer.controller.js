const {CustomerModel} = require("../models");


class CustomerController{

 async getAll(req,res){
  const customers = await CustomerModel.find();
  return res.send(customers);
 }

 async getOne(req,res){
     const {id} = req.params;
     const customer = await CustomerModel.findById(id);
     return res.send(customer);
 }
 async create(req,res){
  const {body} = req;
  const customer = await CustomerModel.create([body]);
  return res.send(customer);
 }

 async update(req,res){
    const {id} = req.params
    const {body} = req;
    const customer = await CustomerModel.findByIdAndUpdate(id,body)
    return res.send(customer);
 }

 async delete(req,res){
    const {id} = req.params
    const customer = await CustomerModel.findByIdAndDelete(id)
    return res.send(customer);
 }




}

module.exports = new CustomerController();