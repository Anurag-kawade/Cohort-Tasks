let h5_1 = React.createElement("h5",{className:"h5-tag"},"About Me");
let h5_2 = React.createElement("h5",{className:"h5-tag"},"Portfolio");
let h5_3 = React.createElement("h5",{className:"h5-tag"},"Services");
let h5_4 = React.createElement("h5",{className:"h5-tag"},"Blog");

let h6 = React.createElement("h6",{id:"h6-tag"},"Book A Call");

function nav(){
    return React.createElement("div",{id:"nav"},[h5_1,h5_2,h5_3,h5_4,h6]);
}

export default nav;