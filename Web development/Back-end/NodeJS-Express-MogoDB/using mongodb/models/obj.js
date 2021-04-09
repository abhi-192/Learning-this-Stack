const mongoose = require('mongoose');

//Remember that each object stored in mongoDB
//database already contains an unique id named
//as '__id' .
const objSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    objId: {
        type:String,
        required:true
    }
  });

  const Obj = mongoose.model('Kitten', objSchema);

  module.exports = Obj;