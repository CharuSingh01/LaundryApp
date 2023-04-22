const materialRouter=require('express').Router();
const {chooseMaterial,getMaterialList}=require('../controllers/material.controller');
materialRouter.post('/chooseType',chooseMaterial);
materialRouter.get('/getMaterialList',getMaterialList);

module.exports=materialRouter;
