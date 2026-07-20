import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // 1. useNavigate import karein
import axios from "axios";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // 2. Hook initialize karein

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
        <h2 className="text-2xl font-semibold text-gray-700 animate-pulse">
          Loading Products...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Explore Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            // 3. Pura card clickable banayein aur uski unique ID link me bhejien
            onClick={() => navigate(`/product/${product.id}`)}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-gray-200 cursor-pointer hover:-translate-y-1"
          >
            <div className="h-56 w-full flex justify-center items-center p-4 bg-gray-550">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-5 flex flex-col grow">
              <span className="text-xs font-semibold uppercase text-green-600 mb-2">
                {product.category}
              </span>
              <h2 className="text-md font-bold text-gray-800 line-clamp-2 mb-3 h-12">
                {product.title}
              </h2>
              <p className="text-sm text-gray-500 line-clamp-3 mb-4">
                {product.description}
              </p>
              <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                <span className="text-xl font-extrabold text-gray-900">
                  ${product.price}
                </span>
                <button
                  type="button"
                  className="bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
