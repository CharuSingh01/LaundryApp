const Cost=require('../Schema/cost.model');

async function costCalculate(req,res){
  try {
    const {quantity,price}=req.body;
    const totalCost=quantity*price;
    console.log(totalCost);
     res.status(200).send({ totalCost }); 
  } catch (e) {
    res.status(400).send({ error: e });
    console.log(e);
  }
}

module.exports=costCalculate;
