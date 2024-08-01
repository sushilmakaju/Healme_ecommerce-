const mongoose = require('mongoose');

// Destructure Schema from mongoose
const {Schema} = mongoose;
// const schema = mongoose.Schema();

const categorySchemas = new Schema({

    name : {
        type:String,
        required:true
    },

    description : {
        type:String,
        required : true
    }

})

const category = mongoose.model('Category',categorySchemas);
module.exports = category;