import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { BlogListProvider } from "./contexts/BlogListContext";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <BlogListProvider>
      <App />
    </BlogListProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
