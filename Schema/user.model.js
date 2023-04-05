const mongoose=require('mongoose');
const { Schema } = mongoose;
const bcrypt=require('bcrypt');

const userSchema = new Schema({
name: String,
email: String,
password:String
});


userSchema.pre('save',async function(next){
try {
  const salt=await bcrypt.genSalt(10);
  const hashedPassword=await bcrypt.hash(this.password,salt);
  this.password=hashedPassword;
  next();
} catch (e) {
  next(e)
}
})



const User = mongoose.model('User', userSchema);

module.exports = User;
