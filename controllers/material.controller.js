const Material=require('../Schema/material.model');

// async function chooseMaterial(req,res){
//
//
//
//   const selectedMaterial = req.body.name;
// //console.log(req.body);
//     try {
//       const material = await Material.findOne({ name: selectedMaterial });
//       // console.log('selectedItem:', selectedItem);
//       //     console.log('item:', item);
//       if (material) {
//         res.status(200).json({ message: "material selected", selectedMaterial: selectedMaterial });
//       } else {
//         res.status(400).json({ error: 'Invalid material selected' });
//       }
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//
// }
async function getMaterialList(req,res){
    try {
        const materialLists = await Material.find();
        res.status(200).send({ materialType: materialLists });

    } catch (e) {
        res.status(500).json({ error: err.message });
    }

}

//get material function
module.exports={getMaterialList};
