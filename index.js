const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {PORT,MONGO_URI} = require("./config");

app.use(express.json());


//importing routes
const {EmployeeRoutes} = require("./routes")

//routes
app.use("/employee",EmployeeRoutes);


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

