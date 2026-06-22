import nav from "./nav.js"
import image from "./img.js";
import middleText from "./text.js";

import { upperTextLeft } from "./text.js";

import {upperTextRight} from "./text.js";

let parent = React.createElement("div",{id:"parent-element"},[nav(),image(),middleText(),upperTextLeft(),upperTextRight()]);

export default parent;