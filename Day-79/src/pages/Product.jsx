import { Link } from "react-router-dom";
const Product = () => {
  return (
    <>
      <div className="text-4xl  flex  justify-center underline p-2 my-4">
        Product
      </div>
      <div className="text-4xl  flex  justify-center underline p-2 gap-8">
        <Link to="/product/men">Men's Product </Link>
        <Link to="/product/women">Women's Product </Link>
      </div>
    </>
  );
};

export default Product;
