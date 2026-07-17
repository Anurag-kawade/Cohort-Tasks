const Navbar = (props) => {
  return (
    <div>
        <h3 className="text-2xl bg-emerald-600 h-30 flex items-center p-2">This is {props.user}</h3>
    </div>
  )
}

export default Navbar