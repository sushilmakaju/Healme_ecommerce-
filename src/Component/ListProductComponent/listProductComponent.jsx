import React, { useEffect, useState } from 'react';
import axiosInstance from '../../config/axiosConfig';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const ListProductComponent = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get("/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct({ ...editingProduct, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingProduct) {
        await axiosInstance.patch(`/api/products/${editingProduct._id}`, editingProduct);
        setEditingProduct(null);
        fetchProducts();
      }
    } catch (error) {
      console.error("Error updating product:", error.response);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axiosInstance.delete(`/api/products/${productId}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
        <h2 className="text-xl font-semibold mb-4">Product List</h2>
  <table className="min-w-full bg-white border">
    <thead>
      <tr className="w-full bg-gray-200 text-left">
        <th className="py-2 px-4 border-b">Name</th>
        <th className="py-2 px-4 border-b">Category</th>
        <th className="py-2 px-4 border-b">Brand</th>
        <th className="py-2 px-4 border-b">Description</th>
        <th className="py-2 px-4 border-b">Count In Stock</th>
        <th className="py-2 px-4 border-b">Rating</th>
        <th className="py-2 px-4 border-b">numReviews</th>
        {/* <th className="py-2 px-4 border-b">productImage</th> */}
        <th className="py-2 px-4 border-b">Actions</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product) => (
        <tr key={product._id} className="border-b">
          <td className="py-2 px-4">{product.name}</td>
          <td className="py-2 px-4">{product.category}</td>
          <td className="py-2 px-4">{product.brand}</td>
          <td className="py-2 px-4">{product.description}</td>
          <td className="py-2 px-4">{product.countInStock}</td>
          <td className="py-2 px-4">{product.rating}</td>
          <td className="py-2 px-4">{product.numReviews}</td>
          {/* <td className="py-2 px-4">{product.productImage}</td> */}
          <td className="py-2 px-4 flex space-x-2">
            <button
              onClick={() => handleEditProduct(product)}
              className="text-blue-500"
            >
              <AiFillEdit />
            </button>
            <button
              onClick={() => handleDeleteProduct(product._id)}
              className="text-red-500"
            >
              <AiFillDelete />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>

      {editingProduct && (
        <form onSubmit={handleSubmit} className="mt-4 p-4 border border-gray-300">
          <h3 className="text-lg font-semibold mb-2">Edit Product</h3>
          <div className="mb-2">
            <label className="block mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={editingProduct.category}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={editingProduct.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={editingProduct.price}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1">Description</label>
            <textarea
              name="description"
              value={editingProduct.description}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1">Product Image URL</label>
            <input
              type="text"
              name="productImage"
              value={editingProduct.productImage}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1">Brand</label>
            <input
              type="text"
              name="brand"
              value={editingProduct.brand}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1">Rating</label>
            <input
              type="number"
              name="rating"
              value={editingProduct.rating}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1">Number of Reviews</label>
            <input
              type="number"
              name="numReviews"
              value={editingProduct.numReviews}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1">Count In Stock</label>
            <input
              type="number"
              name="countInStock"
              value={editingProduct.countInStock}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Update Product
          </button>
        </form>
      )}
    </div>
  );
};

export default ListProductComponent;
