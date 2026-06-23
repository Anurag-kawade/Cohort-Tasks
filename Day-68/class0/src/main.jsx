import ReactDOM from "react-dom/client"

import "./index.css"
import App from "./App"
import {App2 as App2} from "./App"

// import App, { App2 } from "./App";   prefer this 


const root = ReactDOM.createRoot(document.getElementById("root"));

let parent = [<App />,<App2 />];
root.render(parent);


// prefer this => 
// root.render(
//   <>
//     <App />
//     <App2 />
//   </>,
// ); 



