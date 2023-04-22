const mongoose = require('mongoose');
const { Schema } = mongoose;

const materialSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  // Add any other properties for your item schema
});

const Material=mongoose.model('Material',materialSchema);
module.exports=Material;
