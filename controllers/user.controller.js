const User=require('../Schema/user.model');



async function createUser(req, res) {
  try {
    const { name, email, password } = req.body;

    // Check if email already exists in database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists');
      return res.status(409).send({ message: 'User already exists' });
    }

    const newUser = new User({
      name,
      email,
      password,
    });

    await newUser.save();
    res.status(200).send({ message: 'User created successfully!' });
  } catch (e) {
    res.status(400).send({ error: e });
    console.log(e);
  }
}


async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    // Check if email already exists in database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const correctPassword = await User.findOne({ password });
      if(correctPassword){
        console.log('Successfully Logged in');
        return res.status(409).send({ message: 'Successfully Logged in' });
      }
      else{
        console.log('Incorrect Password');
        return res.status(409).send({ message: 'Incorrect Password' });
      }

    }

    else{
      console.log('User does not exist :(');
        res.status(200).send({ message: 'User does not exist :( ' });
    }

  } catch (e) {
    res.status(400).send({ error: e });
    console.log(e);
  }
}


// async function createUser(req,res){
//   try {
//     const {name,email,password}=req.body;
//   //  console.log(req.body);
//     const newUser=new User({
//       name:req.body.name,
//         email:req.body.email,
//         password:req.body.password
//       });
//
// await newUser.save();
//
//
// res.status(200).send({message:'user created successfully!'});
//
//   } catch (e) {
//     res.status(400).send({error:e});
//     console.log(e);
//   }
// }


module.exports={createUser,loginUser};
