const mongoose = require('mongoose');
const { Schema } = mongoose;
// Define the item schema
const serviceSchema = new Schema({
  name: {
    type: String,
    required: false,
    unique: true
  },
  price:{
    type: Number,
  }
  // Add any other properties for your item schema
});

const Service = mongoose.model('Service', serviceSchema);

module.exports=Service;
