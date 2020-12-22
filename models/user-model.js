const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  
  address: {
    type : String,
    required: true,
  },
  nonce: {
    type : String,
    required: true,
  },

  loginCount: {
    type : Number,
    required: true,
  }
  
});

const User = mongoose.model("user", userSchema);

module.exports = User;
