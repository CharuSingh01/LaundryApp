// createOrder
// placeOrder
//service id, no. of items
const orderRouter=require('express').Router();
const {createOrder}=require('../controllers/order.controller');


orderRouter.post('/createOrder',createOrder);
// orderRouter.post('/placeOrder',placeOrder);

module.exports=orderRouter;
