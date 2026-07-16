import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);

// Lifting State Up (or simply State Lifting). -> sending the data from child to parent using props