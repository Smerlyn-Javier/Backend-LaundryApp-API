const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {PORT,MONGO_URI} = require("./config");

mongoose.connect(MONGO_URI,{ useNewUrlParser: true }).then(()=>{
    app.listen(PORT,()=>{
        return console.log(`Application running on por ${PORT}`)
    })
})

