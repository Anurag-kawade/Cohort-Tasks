// Props se 'user' ka data receive kiya
const Card = ({ user }) => {
  return (
    <div className="bg-amber-950 h-60 w-60 rounded-2xl flex flex-col items-center justify-center gap-4 p-2 text-white">
      {/* Dynamic naam aur email */}
      <h3 className="text-2xl font-bold">{user.name}</h3>
      <p className="text-sm opacity-80">{user.email}</p>
    </div>
  );
};

export default Card;