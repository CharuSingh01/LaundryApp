const mongoose=require('mongoose');
const { Schema } = mongoose;

const costSchema = new Schema({
totalCost: Number
});

const Cost=mongoose.model('Cost',costSchema);
module.exports=Cost;
