const Router= require('express').Router();
const userRouter=require('./user.router');
const serviceRouter=require('./services.router');
const materialRouter=require('./material.router');
const slotRouter=require('./slot.router');

Router.use('/user',userRouter);
Router.use('/service',serviceRouter);
Router.use('/material',materialRouter);
Router.use('/slot',slotRouter);

module.exports=Router;
