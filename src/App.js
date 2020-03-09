import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Landing from "./routes/Landing/Landing";
import BlogsListPage from "./routes/BlogsListPage/BlogsListPage";
import BlogPage from "./routes/BlogPage/BlogPage";
import LoginForm from "./components/LoginForm/LoginForm";
import CreateAccountForm from "./components/CreateAccountForm/CreateAccountForm";
import AddBlog from "./routes/AddBlog/AddBlog";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/blogs" component={BlogsListPage} />
          <Route path="/blogs/create-blog" component={AddBlog} />
          <Route path="/blogs/:blogId" component={BlogPage} />
          <Route path="/login" component={LoginForm} />
          <Route path="/create-account" component={CreateAccountForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
