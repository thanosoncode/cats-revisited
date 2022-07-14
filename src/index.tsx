import ReactDOM from "react-dom/client";
import App from "./App";
//TODO: fix fonts
import "./fonts.css";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
