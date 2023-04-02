const Router= require('express').Router();
const userRouter=require('./user.router');

Router.use('/user',userRouter);

module.exports=Router;
