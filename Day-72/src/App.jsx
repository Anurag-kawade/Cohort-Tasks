// import Female from "./components/Female";
// import Male from "./components/Male";
// import Navbar from "./components/Navbar";

const App = () => {
  // const user1 = {
  //   name: "Captain America",
  //   gender: "male",
  // };

  // const user2 = {
  //   name: "Wanda",
  //   gender: "female",
  // };

  return (
    <div>
      {/* this is an example of function calling  */}
      {/* <Navbar title='Player1' color='red' links={['Home','About','Services','Contact']}/>
      <Navbar title='Player2' color='blue' links={['Home','Product','Cutomer Care','Contact Us']}/>
      <Navbar title='Player3' color='green' links={['About','Help','Men']}/> */}

      {/* conditional rendering in react  */}
      {/* {user1.gender === "male" ? <Male /> : <Female />}
      {user2.gender === "male" ? <Male /> : <Female />} */}

      {/* event listener */}
      <button
        onClick={function () {
          console.log("clicked...");
        }}
        className="bg-emerald-600 w-fit p-2 rounded m-2 text-2xl active:scale-95"
      >
        Click to Download...
      </button>
    </div>
  );
};

export default App;
