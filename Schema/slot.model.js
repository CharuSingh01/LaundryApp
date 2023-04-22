const mongoose = require('mongoose');
const { Schema } = mongoose;
// Define the item schema
const slotSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  availability: {
    type:Boolean,
      required: false,
  }
  // Add any other properties for your item schema
});

const Slot = mongoose.model('Slot', slotSchema);

module.exports=Slot;
