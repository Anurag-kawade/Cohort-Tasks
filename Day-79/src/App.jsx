import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Mens from "./pages/Mens";
import Women from "./pages/Women";
import Random from "./pages/Random";
import Error from "./pages/Error";


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />

        {/* nested routes */}
        <Route path="/product/men" element={<Mens />} />
        <Route path="/product/women" element={<Women />} />

        {/* Dynamic routes */}
        <Route path='/:id' element={<Random />}/>

        {/* Dynamic Nested Routes */}
        <Route path='/:id/men' element={<Random />}/>


        {/* Not Found Page  */}
        <Route path="/*" element={<Error />}/>
      </Routes>
    </div>
  );
};

export default App;
