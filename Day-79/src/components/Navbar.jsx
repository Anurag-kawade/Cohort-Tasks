import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="text-2xl p-5 bg-fuchsia-700 flex justify-between">
      <div>Navbar</div>
      <input type="text" placeholder="Enter here" className="border-2 p-1 rounded-2xl"/>
      <div className="flex gap-25">
        <Link to="/">Home</Link>
        {/* <a href="/about">About</a> */}
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
      </div>
    </div>
  );
};

export default Navbar;
