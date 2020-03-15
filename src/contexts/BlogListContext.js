import React, { createContext, Component } from "react";

const BlogListContext = createContext({
  blogList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setBlogList: () => {},
  addBlog: () => {}
});

export default BlogListContext;

export class BlogListProvider extends Component {
  state = {
    error: null,
    blogList: []
  };

  setBlogList = blogList => {
    this.setState({ blogList });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  addBlog = blog => {
    this.setBlogList([...this.state.blogList, blog]);
  };

  render() {
    const value = {
      error: this.state.error,
      blogList: this.state.blogList,
      setError: this.setError,
      clearError: this.clearError,
      setBlogList: this.setBlogList,
      addBlog: this.addBlog
    };
    return (
      <BlogListContext.Provider value={value}>
        {this.props.children}
      </BlogListContext.Provider>
    );
  }
}
