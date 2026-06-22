import square from "./app.js";
import circle from "./test.js";

let parent = ()=>{
    return React.createElement("div",{id:"par"},[square(),circle()]);
}

export default parent;