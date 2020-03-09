import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import BlogsListPage from "./routes/BlogsListPage/BlogsListPage";
import BlogPage from "./routes/BlogPage/BlogPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={BlogsListPage} />
          <Route path="/blogs/:blogId" component={BlogPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
