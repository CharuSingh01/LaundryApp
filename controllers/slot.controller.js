const Slot=require('../Schema/slot.model');


async function chooseSlot(req,res){
  const selectedSlot = req.body.name;
//console.log(req.body);
    try {
      const slot = await Slot.findOne({ name: selectedSlot });
      // console.log('selectedItem:', selectedItem);
      //     console.log('item:', item);
      if (slot) {
           if(slot.availability)
           {
               res.status(200).json({ message: "Slot Available!", selectedItem: selectedSlot });
           }
           else if(slot.availability==false){
               res.status(200).json({ message: "Slot not Available", selectedItem: selectedSlot });
           }
      } else {
        res.status(400).json({ error: 'Invalid Slot selected' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }


}

module.exports={chooseSlot};
