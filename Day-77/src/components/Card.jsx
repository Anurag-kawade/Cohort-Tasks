const Card = (props) => {
  // eslint-disable-next-line react-hooks/purity
  let c1 = Math.floor(Math.random()*256)
  // eslint-disable-next-line react-hooks/purity
  let c2 = Math.floor(Math.random()*256)
  // eslint-disable-next-line react-hooks/purity
  let c3 = Math.floor(Math.random()*256)
  return (
    <div style={{background:`rgb(${c1},${c2},${c3})`}} className="h-50 w-70 rounded flex flex-col items-center gap-2 py-5.5">
      <h4 className="text-xl">{props.elem.name}</h4>
      <h4 className="text-xl">{props.elem.username}</h4>
      <h4 className="text-xl">{props.elem.email}</h4>
      <h4 className="text-xl">{props.elem.website}</h4>
    </div>
  )
}

export default Card

