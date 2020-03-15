import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { BlogListProvider } from "./contexts/BlogListContext";
import { BlogProvider } from "./contexts/BlogPageContext";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <BlogListProvider>
      <BlogProvider>
        <App />
      </BlogProvider>
    </BlogListProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
