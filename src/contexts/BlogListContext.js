import React, { createContext, Component } from "react";

const BlogListContext = createContext({
  blogList: [],
  blog: {},
  setBlogList: () => {},
  setBlog: () => {},
  addBlog: () => {}
});

export default BlogListContext;

export class BlogListProvider extends Component {
  state = {
    blogList: [],
    blog: {}
  };

  setBlogList = blogList => {
    this.setState({ blogList });
  };

  setBlog = blog => {
    this.setState({ blog });
  };

  addBlog = blog => {
    this.setState({
      blogList: [blog, ...this.state.blogList]
    });
  };

  render() {
    const value = {
      blogList: this.state.blogList,
      blog: this.state.blog,
      setBlogList: this.setBlogList,
      setBlog: this.setBlog,
      addBlog: this.addBlog
    };
    return (
      <BlogListContext.Provider value={value}>
        {this.props.children}
      </BlogListContext.Provider>
    );
  }
}
