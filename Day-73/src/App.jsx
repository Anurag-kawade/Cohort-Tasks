// import { useState } from "react";

// const App = () => {
//   let [num, setnum] = useState(0);

//   let increment = () => {
//     setnum(num+1);
//   };
//   let decrement = () => {
//     setnum(num-1);
//   };
//   return (
//     <div className="content">
//       <h1>{num}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button
//         onClick={() => {
//           setnum(num + 10);
//         }}
//       >
//         Increment by 10
//       </button>
//     </div>
//   );
// };

// export default App;

// changing the color of the div

// import { useState } from "react";

// const App = () => {

//   const [bgColor, setBgColor] = useState('#000000');

//   function changeColor() {
//     const randomColor =
//       "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");

//     setBgColor(randomColor);
//   }

//   return (
//     <div>
//       <div style={{backgroundColor:bgColor}} className="box"></div>
//       <button onClick={changeColor}>Change</button>
//     </div>
//   )
// }

// export default App

// grace marks - code
// import {useState} from 'react'

// const App = () => {

//   const [marks, setMarks] = useState([88,45,56,12,28])

//   function graceMarks(){
//     let graceMarks = marks.map(function(elem){
//       return elem + 5;
//     })

//     setMarks(graceMarks);
//   }

//   return (
//     <div>
//       {marks.map(function(elem,idx){
//         return <h3 id='idx'>Student {idx+1} = {elem} {(elem > 30)?"(Pass)":"(Fail)"}</h3>
//       })}

//       <button onClick={graceMarks}>Give Grace Marks</button>
//     </div>
//   )
// }

// export default App
