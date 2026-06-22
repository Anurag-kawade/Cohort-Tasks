let h1 = React.createElement("h1",{id:"h1-text"},"Hello");
let h4 = React.createElement("h4",{id:"h4-text"},"- It's Anurag a web-dev wizerd");

let h2_1 = React.createElement("h2",{id:"h2_text"},"+200");
let h3_1 = React.createElement("h3",{id:"h3_text"},"Project Completed");   

let h2_2 = React.createElement("h2",{id:"h2_2_text",className:"right-text"},"+50");
let h3_2 = React.createElement("h3",{id:"h3_2_text",className:"right-text"},"Startup Raised"); 


function middleText(){
    return React.createElement("div",{id:"middle-text"},[h1,h4]);
}

export function upperTextLeft(){
    return React.createElement("div",{id:"upper-text"},[h2_1,h3_1]);
}

export function upperTextRight(){
    return React.createElement("div",{id:"upper-text-right"},[h2_2,h3_2]);
}

export default middleText;