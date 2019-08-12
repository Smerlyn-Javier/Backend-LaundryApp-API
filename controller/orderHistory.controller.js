const {OrderHistoryModel} = require("../models");


class OrderHistoryController{

 async getAll(req,res){
  const ordersHistorys = await OrderHistoryModel.find();
  return res.send(ordersHistorys);
 }

 async getOne(req,res){
     const {id} = req.params;
     const ordersHistory = await OrderHistoryModel.findById(id);
     return res.send(ordersHistory);
 }
 async create(req,res){
  const {body} = req;
  const ordersHistory = await OrderHistoryModel.create([body]);
  return res.send(ordersHistory);
 }

 async update(req,res){
    const {id} = req.params
    const {body} = req;
    const ordersHistory = await OrderHistoryModel.findByIdAndUpdate(id,body)
    return res.send(ordersHistory);
 }

 async delete(req,res){
    const {id} = req.params
    const ordersHistory = await OrderHistoryModel.findByIdAndDelete(id)
    return res.send(ordersHistory);
 }




}

module.exports = new OrderHistoryController();