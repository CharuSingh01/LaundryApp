const serviceRouter=require('express').Router();
const {chooseService,getServiceList}=require('../controllers/services.controller');


serviceRouter.post('/chooseType',chooseService);
serviceRouter.get('/getServiceList',getServiceList);


module.exports=serviceRouter;
