import React, { useEffect, useState } from 'react';
import axiosInstance from '../../config/axiosConfig';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProductComponent = () => {
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    price: '',
    description: '',
    productImage: null,
    brand: '',
    rating: '',
    numReviews: '',
    countInStock: ''
  });

  const [category, setCategories] = useState([]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      productImage: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('category', formData.category); // leftside name == database model name
    data.append('name', formData.name);
    data.append('price', formData.price);
    data.append('description', formData.description);
    data.append('productImage', formData.productImage);
    data.append('brand', formData.brand);
    data.append('rating', formData.rating);
    data.append('numReviews', formData.numReviews);
    data.append('countInStock', formData.countInStock);

    try {
      const response = await axiosInstance.post("/api/products", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success(response.data.msg);
      console.log("Product added successfully:", response.data);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  //   to get category from the database
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axiosInstance.get("/api/category/all");
        // console.log("Category fetched successfully:", response.data.categories);
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };
    fetchCategory();
  }, []);

  

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-lg m-8">
       <ToastContainer />
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Category:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          {category.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Product Image:</label>
        <input
          type="file"
          name="productImage"
          onChange={handleFileChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Brand:</label>
        <input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Rating:</label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Number of Reviews:</label>
        <input
          type="number"
          name="numReviews"
          value={formData.numReviews}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Count in Stock:</label>
        <input
          type="number"
          name="countInStock"
          value={formData.countInStock}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Product
      </button>

      <div className="flex flex-col mb-2">

      </div>
    </form>
  );
};

export default AddProductComponent;