const Router= require('express').Router();
const userRouter=require('./user.router');
const serviceRouter=require('./services.router');

Router.use('/user',userRouter);
Router.use('/service',serviceRouter);

module.exports=Router;
