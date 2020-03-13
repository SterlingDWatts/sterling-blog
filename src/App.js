import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Landing from "./routes/Landing/Landing";
import BlogsListPage from "./routes/BlogsListPage/BlogsListPage";
import BlogPage from "./routes/BlogPage/BlogPage";
import LoginPage from "./routes/LoginPage/LoginPage";
import CreateAccountPage from "./routes/CreateAccountPage/CreateAccountPage";
import AddBlog from "./routes/AddBlog/AddBlog";
import PublicOnlyRoute from "./components/Utils/PublicOnlyRoute";
import BlogListContext from "./contexts/BlogListContext";
import BlogApiService from "./services/blog-api-service";
import IdleService from "./services/idle-service";
import TokenService from "./services/token-service";
import AuthApiService from "./services/auth-api-service";
import blogs from "./blogs-store";
import "./App.css";

class App extends Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }
  static contextType = BlogListContext;

  componentDidMount() {
    BlogApiService.getBlogs().then(this.context.setBlogList);

    IdleService.setIdleCallback(this.logoutFromIdle);
    if (TokenService.hasAuthToken()) {
      IdleService.registerIdleTimerResets();
      TokenService.queueCallBackBeforeExpiry(() => {
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
          <Route path="/blogs/create-blog" component={AddBlog} />
          <Route path="/blogs/:blogId" component={BlogPage} />
          <PublicOnlyRoute path={"/login"} component={LoginPage} />
          <PublicOnlyRoute
            path={"/create-account"}
            component={CreateAccountPage}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
