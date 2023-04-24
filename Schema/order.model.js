const mongoose=require('mongoose');
const { Schema } = mongoose;
const { v4: uuidv4 } = require('uuid');

const orderSchema = new mongoose.Schema({
 orderId: { type: String, default: uuidv4, unique: true },
  customerInfo: {
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true }
  },
  // shippingInfo: {
  //   name: { type: String, required: true },
  //   address: { type: String, required: true },
  //   specialInstructions: { type: String }
  // },


  //getprice api

  productInfo: [{
    materialId: { type: String, ref:'Material' ,required: true },
    serviceIid: { type: String, ref:'Service', required: true },
    quantity: { type: Number, required: true },
  }],
  totalCost: { type: Number, required: true },
  paymentInfo: {
    method: { type: String, required: true },
    // cardNumber: { type: String },
    // cardExpirationDate: { type: String },
    // cardSecurityCode: { type: String }
  },
  // orderStatus: { type: String, required: true },
  dateAndTime: { type: Date, required: true }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
