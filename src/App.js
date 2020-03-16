import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Landing from "./routes/Landing/Landing";
import BlogsListPage from "./routes/BlogsListPage/BlogsListPage";
import BlogPage from "./routes/BlogPage/BlogPage";
import LoginPage from "./routes/LoginPage/LoginPage";
import CreateAccountPage from "./routes/CreateAccountPage/CreateAccountPage";
import AddBlog from "./routes/AddBlog/AddBlog";
import EditBlog from "./routes/EditBlogPage/EditBlog";
import PublicOnlyRoute from "./components/Utils/PublicOnlyRoute";
import PrivateRoute from "./components/Utils/PrivateRoute";
import IdleService from "./services/idle-service";
import TokenService from "./services/token-service";
import AuthApiService from "./services/auth-api-service";
import "./App.css";

class App extends Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  componentDidMount() {
    IdleService.setIdleCallback(this.logoutFromIdle);
    if (TokenService.hasAuthToken()) {
      IdleService.registerIdleTimerResets();
      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken();
      });
    }
  }

  componentWillUnmount() {
    IdleService.unRegisterIdleResets();
    TokenService.clearCallbackBeforeExpiry();
  }

  logoutFromIdle = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
    this.forceUpdate();
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/blogs" component={BlogsListPage} />
          <PrivateRoute path="/blogs/create-blog" component={AddBlog} />
          <PrivateRoute path="/blogs/edit/:blogId" component={EditBlog} />
          <Route path="/blogs/:blogId" component={BlogPage} />
          <PublicOnlyRoute path={"/login"} component={LoginPage} />
          <PublicOnlyRoute
            path={"/create-account"}
            component={CreateAccountPage}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
