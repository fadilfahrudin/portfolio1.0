import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppRoute } from "./pages";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.scss";
import { BrowserRouter } from "react-router-dom";

// const docTitle = document.title;
// window.addEventListener("blur", () => {
//   document.title = "come back..";
// });

// window.addEventListener("focus", () => {
//   document.title = docTitle;
// });
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
