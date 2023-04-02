const userRouter=require('express').Router();
const {createUser,loginUser}=require('../controllers/user.controller');


userRouter.post('/create',createUser);
userRouter.post('/login',loginUser);

module.exports=userRouter;
