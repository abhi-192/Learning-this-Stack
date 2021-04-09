const mongoose = require('mongoose');

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