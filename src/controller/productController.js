
const Product = require('../models/productmodel')

const Addproduct = (req,res) => {

    const data = req.body;
    const name = data.name;
    const description = data.description;
    const price = data.price;
    const categories = data.category;
    const stocks = data.stock;

    const newProduct = new Product(
        {
            name : name,
            description : description,
            price : price,
            category : categories,
            stock : stocks,

        }
    );
    newProduct
    .save()
    .then((data)=>{

        res
        .status(201)
        .json({ message: "Product added successfully", data});

})

.catch((err) => {
    res.status(500).json({ message: "Error adding product", err });
});


}

const updateProduct = async (req, res) => {
    try {
      const productId = req.params.id; 
      const updateData = req.body;
  
      const updatedProduct = await Product.findOneAndUpdate(
        { _id: productId },
        updateData,
        { new: true, runValidators: true }
      );
  
      if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.status(200).json({ message: "Product updated successfully", data: updatedProduct });
    } catch (err) {
      res.status(500).json({ message: "Error updating product", error: err });
    }
  };

  const getAllProduct = async (req, res) =>{
    try{
      const products = await Product.find();
      res.status(200).json({msg : "products found sucessfully", products: products});
    }catch (error) {
      sendErrorResponse(res, error);
    }

  }

  const getProductById = async (req, res) => {
    try {
      const { id } = req.params; 
      const product = await Product.findById(id); 
      
      if (!product) {
        return res.status(404).json({ msg: "Product not found" });
      }
      
      res.status(200).json({ msg: "Product found successfully", product: product });
    } catch (error) {
      sendErrorResponse(res, error);
    }
  }
  
module.exports = {
    Addproduct,
    updateProduct,
    getAllProduct,
    getProductById
}