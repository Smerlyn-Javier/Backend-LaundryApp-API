const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { PORT, MONGO_URI } = require("./config");

app.use(express.json());

//importing routes
const {
  EmployeeRoutes,
  CategoryPiceRoutes,
  ColorRoutes,
  CustomerRoutes,
  IncludedRoutes,
  NameServiceRoutes,
  OrderHistoryRoutes,
  OrderRoutes,
  PlanRoutes,
  RoleRoutes,
  ServiceRoutes,
  StatusOrderRoutes,
  WaschPiceRoutes
} = require("./routes");

//routes
app.use("/plan", PlanRoutes);
app.use("/role", RoleRoutes);
app.use("/color", ColorRoutes);
app.use("/order", OrderRoutes);
app.use("/service", ServiceRoutes);
app.use("/customer", CustomerRoutes);
app.use("/employee", EmployeeRoutes);
app.use("/included", IncludedRoutes);
app.use("/waschPice", WaschPiceRoutes);
app.use("/nameService", NameServiceRoutes);
app.use("/statusOrder", StatusOrderRoutes);
app.use("/orderHistory", OrderHistoryRoutes);
app.use("/categoryPice", CategoryPiceRoutes);

app.use((err, req, res, next) => {
  return res.status(err.status || 500).send(err.message);
});

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Application running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.log(err);
    process.exit(0);
  });
