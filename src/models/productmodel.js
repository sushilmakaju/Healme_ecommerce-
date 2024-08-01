const mongoose = require('mongoose');

// Destructure Schema from mongoose
const {Schema} = mongoose;
// const schema = mongoose.Schema();

const productSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },

    stock: {
      type: Number,
      required: true
    },
    dateAdded: {
      type: Date,
      default: Date.now
    },

    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true
  }

  });
  
 const Product = mongoose.model('Product',productSchema);
  module.exports = Product;


   