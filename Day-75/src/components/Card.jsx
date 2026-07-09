const Card = (props) => {
  return (
    <div className=" w-70 bg-blue-400 rounded-4xl p-2 flex flex-col items-center gap-3">
      <img
        className="w-25 h-25 object-cover rounded-[50%] object-top "
        src={props.elem.userImage}
        alt=""
      />
      <h2 className="text-3xl text-[#C62828]">{props.elem.userName}</h2>
      <h3 className="text-2xl text-[#1a745f]">{props.elem.userDesignation}</h3>
      <h5>{props.elem.userDescription}</h5>
      <button onClick={()=>{
        props.deleteHandler(props.idx)
      }} id={props.idx} className="bg-red-600  px-2.5 py-1 rounded-[10px] active:scale-95">Remove</button>
    </div>
  );
};

export default Card;
