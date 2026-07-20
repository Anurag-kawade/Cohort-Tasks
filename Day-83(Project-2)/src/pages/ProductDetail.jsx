import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // 1. useParams dynamic ID read karega
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams(); // URL se id nikal rahe hain (e.g., /product/5 me se '5')
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        // Sirf isi ek product ka data mangwa rahe hain
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`,
        );
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Product detail load karne me error:", error);
        setLoading(false);
      }
    };

    fetchSingleProduct();
  }, [id]); // Agar id badlegi, toh ye useEffect firse chalega

  if (loading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-700 animate-pulse">
          Loading Product Details...
        </h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-50">
        <h2 className="text-2xl font-bold text-red-500 mb-4">
          Product Not Found!
        </h2>
        <button
          onClick={() => navigate("/allproducts")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-16 flex flex-col items-center">
      {/* Back Button */}
      <button
        onClick={() => navigate("/allproducts")}
        className="self-start mb-8 flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
      >
        ← Back to All Products
      </button>

      {/* Main Container */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 max-w-5xl w-full p-6 md:p-12 flex flex-col md:flex-row gap-12 items-center">
        {/* Left Side: Product Image */}
        <div className="w-full md:w-1/2 flex justify-center max-h-100">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain max-h-full max-w-full hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col">
          <span className="text-sm font-bold tracking-wider text-green-600 uppercase mb-2">
            {product.category}
          </span>

          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4 leading-snug">
            {product.title}
          </h1>

          {/* Rating Section */}
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-2.5 py-1 rounded">
              ⭐ {product.rating?.rate}
            </span>
            <span className="text-sm text-gray-500">
              ({product.rating?.count} reviews)
            </span>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
            <span className="text-3xl font-black text-gray-900">
              ${product.price}
            </span>

            <button
              type="button"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-xl active:scale-95 shadow-md hover:shadow-lg transition-all"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
