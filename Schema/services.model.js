const mongoose = require('mongoose');
const { Schema } = mongoose;
// Define the item schema
const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  // Add any other properties for your item schema
});


const Item = mongoose.model('Item', itemSchema);

module.exports=Item;
