import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      {/* 1. HERO SECTION */}
      <div className="relative bg-linear-to-r from-emerald-800 to-teal-950 text-white py-24 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Decorative Circles */}
        <div className="absolute w-96 h-96 bg-emerald-700 rounded-full blur-3xl opacity-20 -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-teal-600 rounded-full blur-3xl opacity-20 -bottom-20 -right-20"></div>

        <div className="relative z-10 max-w-3xl">
          <span className="bg-emerald-600 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6 inline-block shadow-sm">
            Exclusive Summer Collection 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Upgrade Your Lifestyle <br />
            <span className="text-emerald-400">Without Breaking The Bank</span>
          </h1>
          <p className="text-base md:text-xl text-emerald-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Discover top-tier electronics, trendy clothing, and premium jewelry
            curated just for you. Get free shipping on all orders over $50!
          </p>

          {/* Main Action Button */}
          <button
            onClick={() => navigate("/allproducts")}
            type="button"
            className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl active:scale-95 transition-all duration-150 tracking-wide"
          >
            Explore Products Now →
          </button>
        </div>
      </div>

      {/* 2. FEATURES SECTION (Value Proposition) */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center text-2xl mb-4 font-bold">
            🚚
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            Fast & Free Shipping
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            We offer zero-cost delivery across the country for all orders that
            cross the minimal baseline.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center text-2xl mb-4 font-bold">
            🛡️
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            Secure Payments
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Your transactions are heavily guarded using advanced 256-bit
            encryption protocols.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center text-2xl mb-4 font-bold">
            🔄
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            Easy 30-Day Returns
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Not satisfied with what you bought? Ship it back to us within a
            month, no questions asked.
          </p>
        </div>
      </div>

      {/* 3. MINIMAL FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm border-t border-gray-800 w-full">
        <p>© 2026 YourStore Marketplace. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
