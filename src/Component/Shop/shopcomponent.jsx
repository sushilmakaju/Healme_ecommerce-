import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Shopcomponent = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/products');
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      setError(error.message);
      return [];
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        console.log('Fetched products:', data);
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="border rounded-lg p-4 shadow-md">
            <img
              src={product.productImage || 'https://via.placeholder.com/150'}
              alt={product.name}
              className="w-full h-48 object-cover mb-4"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/150';
                // console.log('Image failed to load, using fallback');
                // console.log('Image URL:', product.productImage); // Log the URL to check
              }}
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-gray-900 font-bold">${product.price}</p>
            <p className="text-gray-600 mt-2">In stock: {product.countInStock}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopcomponent;