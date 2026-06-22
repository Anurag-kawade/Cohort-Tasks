// let h1 = React.createElement("h1",null,"Hello from Anurag to React!!!");

// let container = document.querySelector("#container");

// let root = ReactDOM.createRoot(container);

// root.render(h1);



let h1 = React.createElement("h1",{id:"h1"},"Hello h1");
let h2 = React.createElement("h2",{class:"h2"},"Hello h2");

let parent = React.createElement("div",{id:"parent"},[h1,h2]);

let root = ReactDOM.createRoot(document.querySelector("#container"));

root.render(parent);