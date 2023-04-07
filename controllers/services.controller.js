const Item=require('../Schema/services.model');

async function chooseItem(req,res){
  const selectedItem = req.body.name;
//console.log(req.body);
    try {
      const item = await Item.findOne({ name: selectedItem });
      // console.log('selectedItem:', selectedItem);
      //     console.log('item:', item);
      if (item) {
        res.status(200).json({ message: "item selected", selectedItem: selectedItem });
      } else {
        res.status(400).json({ error: 'Invalid item selected' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }


}

module.exports={chooseItem};
