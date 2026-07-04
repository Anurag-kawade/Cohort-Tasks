const Card = (props) => {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <h5>{props.email}</h5>
    </div>
  );
};

export default Card;
