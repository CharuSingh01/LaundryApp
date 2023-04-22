const Service=require('../Schema/services.model');

async function chooseService(req,res){
  const selectedService = req.body.name;
//console.log(req.body);
    try {
      const service = await Service.findOne({ name: selectedService });
      // console.log('selectedItem:', selectedItem);
      //     console.log('item:', item);
      if (service) {
        res.status(200).json({ message: "Service selected", selectedItem: selectedService });
      } else {
        res.status(400).json({ error: 'Invalid Service selected' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }


}

async function getServiceList(req,res){
    try {
        const serviceLists = await Service.find();
        res.status(200).send({ serviceType: serviceLists });

    } catch (e) {
        res.status(500).json({ error: err.message });
    }

}



module.exports={chooseService,getServiceList};
