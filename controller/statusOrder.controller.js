const {StatusOrderModel} = require("../models");


class StatusOrderController{

 async getAll(req,res){
  const statusOrders = await StatusOrderModel.find();
  return res.send(statusOrders);
 }

 async getOne(req,res){
     const {id} = req.params;
     const statusOrder = await StatusOrderModel.findById(id);
     return res.send(statusOrder);
 }
 async create(req,res){
  const {body} = req;
  const statusOrder = await StatusOrderModel.create([body]);
  return res.send(statusOrder);
 }

 async update(req,res){
    const {id} = req.params
    const {body} = req;
    const statusOrder = await StatusOrderModel.findByIdAndUpdate(id,body)
    return res.send(statusOrder);
 }

 async delete(req,res){
    const {id} = req.params
    const statusOrder = await StatusOrderModel.findByIdAndDelete(id)
    return res.send(statusOrder);
 }




}

module.exports = new StatusOrderController();