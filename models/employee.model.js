const mongoose = require("mongoose");
const {Schema} = mongoose;
const {StatusHelper} = require("../helpers");
const { compareSync, hashSync, genSaltSync } = require("bcryptjs");


const EmployeeSchema = new Schema({

    name: { type: String },
    lastname: { type: String },
    email: { type: String, unique: true, lowercase: true },
    username: { type: String,  unique: true },
    password: { type: String },
    address: { type: String },
    birthday: { type: Date },
    picture: { type: String },
    role: { type:Schema.Types.ObjectId, ref: "Role" },
    status: { type: String, default: StatusHelper.ACTIVE }

},{timestamps:{updatedAt:true, createdAt:true}})

EmployeeSchema.methods.toJSON = function() {
    let user = this.toObject();
    delete user.password;
    return user;
  };
  
  EmployeeSchema.pre("save", async function(next) {
    const user = this;
  
    if (!user.isModified("password")) {
      return next();
    }
  
    const salt = genSaltSync(10);
    const hashedPassword = hashSync(user.password, salt);
    user.password = hashedPassword;
  
    next();
  });
  
  EmployeeSchema.methods.comparePasswords = function(password) {
    return compareSync(password, this.password);
  };




module.exports = mongoose.model("Employee", EmployeeSchema);