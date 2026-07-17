// Accessing multiple children 
const Footer = (props) => {
  return (
    <div>
      <p className="text-2xl bg-yellow-600 h-43 flex items-center p-2">
        {props.children[0]}
      </p>

      <p className="text-2xl bg-yellow-600 h-43 flex items-center p-2">
        {props.children[1]}
      </p>
    </div>
  );
};

export default Footer;
