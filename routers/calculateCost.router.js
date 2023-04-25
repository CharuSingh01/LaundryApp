const costCalRouter=require('express').Router();
const costCalculate=require('../controllers/calculateCost.controller');

costCalRouter.post('/getCost',costCalculate);

module.exports=costCalRouter;
