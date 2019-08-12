const { NameServiceModel, IncludeServiceModel } = require("../models");

class NameServiceController {
  async getAll(req, res) {
    const nameServices = await NameServiceModel.find().populate(
      "included_services"
    );
    return res.send(nameServices);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const nameServices = await NameServiceModel.findById(id).populate(
      "included_services"
    );
    return res.send(nameServices);
  }

  //--------------------------------------------------------
  async create(req, res) {
    const {
      service: service,
      included_services: included_services,
      price: price,
      time2: time2
    } = req.body;

    var tiempoEspera = 0;

    if (included_services) {
      for (var i = 0; i <= included_services.length - 1; i++) {
        const id = included_services[i];
        const includeService = await IncludeServiceModel.findById(id);
        const { time } = includeService;
        parseInt(time);
        tiempoEspera += time;
      }
    }

    const time = tiempoEspera + time2;

    const nameServices = await NameServiceModel.create([
      { service, included_services, price, time }
    ]).catch(err => {
      console.log(err);
    });

    return res.send(nameServices);
  }

  //--------------------------------------------------------

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;
    const nameServices = await NameServiceModel.findByIdAndUpdate(id, body);
    return res.send(nameServices);
  }

  async delete(req, res) {
    const { id } = req.params;
    const nameServices = await NameServiceModel.findByIdAndDelete(id);
    return res.send(nameServices);
  }
}

module.exports = new NameServiceController();
