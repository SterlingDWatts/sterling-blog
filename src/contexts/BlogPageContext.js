import React, { Component } from "react";

export const nullBlog = {
  author: {}
};

const BlogContext = React.createContext({
  blog: nullBlog,
  error: null,
  setError: () => {},
  clearError: () => {},
  setBlog: () => {},
  clearBlog: () => {}
});

export default BlogContext;

export class BlogProvider extends Component {
  state = {
    blog: nullBlog,
    error: null
  };

  setError = e => {
    console.error(e);
    this.setState({ e });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setBlog = blog => {
    this.setState({ blog });
  };

  clearBlog = () => {
    this.setBlog(nullBlog);
  };

  render() {
    const value = {
      blog: this.state.blog,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setBlog: this.setBlog,
      clearBlog: this.clearBlog
    };
    return (
      <BlogContext.Provider value={value}>
        {this.props.children}
      </BlogContext.Provider>
    );
  }
}
