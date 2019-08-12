const { OrderModel, ServiceModel, NameServiceModel } = require("../models");

class OrderController {
  async getAll(req, res) {
    const orders = await OrderModel.find();
    return res.send(orders);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const order = await OrderModel.findById(id);
    return res.send(order);
  }
  //-----------------------------------------------------------
  async create(req, res) {
    const {
      customer: customer,
      employee: employee,
      service: service,
      aditionalService: aditionalService,
      color: color,
      description: description
    } = req.body;

    //  const currentService1 = await ServiceModel.findById(service).populate(
    //    "nameService"
    //  );
    //  const { nameService } = currentService1;
    //  const { id } = nameService;
    //  const includedservices = await NameServiceModel.findById(id).populate(
    //    "includedServices"
    //  );
    //  const currentService = includedservices[0] || null;

    const order = await OrderModel.create([
      {
        customer,
        employee,
        statusOrder,
        service,
        currentService,
        aditionalService,
        color,
        quantity,
        delivery,
        description,
        Subtotal,
        discount,
        total
      }
    ]);

    return res.send(order);
  }
  //-----------------------------------------------------------
  async update(req, res) {
    const { id } = req.params;
    const { body } = req;
    const order = await OrderModel.findByIdAndUpdate(id, body);
    return res.send(order);
  }

  async delete(req, res) {
    const { id } = req.params;
    const order = await OrderModel.findByIdAndDelete(id);
    return res.send(order);
  }
}

module.exports = new OrderController();
