import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproducts" element={<AllProducts />} />

        <Route path='/product/:id' element={<ProductDetail />}/>
      </Routes>
    </div>
  );
};

export default App;
