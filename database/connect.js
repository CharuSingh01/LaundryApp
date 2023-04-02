const mongoose=require('mongoose');

async function main() {
  try {
      await mongoose.connect("mongodb://0.0.0.0:27017/wikiDB", {useNewUrlParser: true}).then(function(){
        console.log('database connected!');
      });
  } catch (e) {
    console.log(e);
  }

}

module.exports = { main }
