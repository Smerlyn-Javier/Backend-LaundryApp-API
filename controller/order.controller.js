const {OrderModel} = require("../models");


class OrderController{

 async getAll(req,res){
  const orders = await OrderModel.find();
  return res.send(orders);
 }

 async getOne(req,res){
     const {id} = req.params;
     const order = await OrderModel.findById(id);
     return res.send(order);
 }
 async create(req,res){
  const {body} = req;
  const order = await OrderModel.create([body]);
  return res.send(order);
 }

 async update(req,res){
    const {id} = req.params
    const {body} = req;
    const order = await OrderModel.findByIdAndUpdate(id,body)
    return res.send(order);
 }

 async delete(req,res){
    const {id} = req.params
    const order = await OrderModel.findByIdAndDelete(id)
    return res.send(order);
 }




}

module.exports = new OrderController();