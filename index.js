const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors=require('cors');
const connect=require('./database/connect').main();
const Router=require('./routers/index');

console.log(connect);
const app = express();


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors());


app.use("/api",Router)


app.listen(3000,function(){
  console.log("Server started on port 3000")
});
