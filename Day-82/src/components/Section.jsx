// Accessing single children 
const Section = ({children}) => {   {/* this is destructuring */}
  return (
    <div>
      <h3 className="text-2xl bg-orange-600 h-100 flex items-center p-2">{children}</h3>
    </div>
  );
};

export default Section;
