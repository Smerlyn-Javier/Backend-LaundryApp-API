const { ServiceModel, NameServiceModel, WashPiceModel } = require("../models");

class ServiceController {
  async getAll(req, res) {
    const services = await ServiceModel.find();
    return res.send(services);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const service = await ServiceModel.findById(id);
    return res.send(service);
  }
  async create(req, res) {
    const { nameService: nameService, washPice: washPice } = req.body;

    const serviceName = await NameServiceModel.findById(nameService);
    const pice = await WashPiceModel.findById(washPice);

    const price1 = parseInt(serviceName.price);
    const price2 = parseInt(pice.price);

    const price = parseInt(price1 + price2);

    const service = await ServiceModel.create([
      { nameService, washPice, price }
    ]);
    return res.send(service);
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;
    const service = await ServiceModel.findByIdAndUpdate(id, body);
    return res.send(service);
  }

  async delete(req, res) {
    const { id } = req.params;
    const service = await ServiceModel.findByIdAndDelete(id);
    return res.send(service);
  }
}

module.exports = new ServiceController();
