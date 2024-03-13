import ReactDOM from "react-dom/client";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import "../src/scss/Index.scss";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.querySelector("#root") as HTMLElement);
root.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>
);

reportWebVitals();
//npm install --legacy-peer-deps
