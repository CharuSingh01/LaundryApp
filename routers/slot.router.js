const slotRouter=require('express').Router();
const {chooseSlot}=require('../controllers/slot.controller');


slotRouter.post('/chooseSlot',chooseSlot);


module.exports=slotRouter;
