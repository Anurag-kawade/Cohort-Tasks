const Navbar = (props) => {
  return (
    <div style={{backgroundColor:props.color}} className="flex justify-between m-5 h-15 items-center p-7.5">
      <h3 className="text-[25px]">{props.title}</h3>
      <div className="flex gap-30">
        {props.links.map((elem) => {
          return <a href="#">{elem}</a>;
        })}
      </div>
    </div>
  );
};

export default Navbar;
