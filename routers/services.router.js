const serviceRouter=require('express').Router();
const {chooseItem}=require('../controllers/services.controller');


serviceRouter.post('/chooseType',chooseItem);


module.exports=serviceRouter;
