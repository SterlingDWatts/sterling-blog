import React, { Component } from "react";
import PropTypes from "prop-types";
import BlogBody from "../../components/BlogBody/BlogBody";
import BlogList from "../../components/BlogList/BlogList";
import BlogPageContext from "../../contexts/BlogPageContext";
import BlogApiService from "../../services/blog-api-service";
import { Page } from "../../components/Utils/Utils";
import "./BlogPage.css";

class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogId: this.props.match.params.blogId,
      userId: null
    };
  }

  static defaultProps = {
    match: { params: { blogId: -1 } }
  };

  static contextType = BlogPageContext;

  componentDidMount() {
    const blogId = this.props.match.params.blogId;
    this.context.clearError();
    BlogApiService.getBlog(blogId)
      .then(this.context.setBlog)
      .catch(this.context.setError);
  }

  componentWillUnmount() {
    this.context.clearBlog();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.blogId !== this.state.blogId) {
      const blogId = this.props.match.params.blogId;
      this.setState({
        blogId
      });
      this.context.clearError();
      BlogApiService.getBlog(blogId)
        .then(this.context.setBlog)
        .catch(this.context.setError);
    }
  }

  renderBlog() {
    return <BlogBody />;
  }

  handleClick() {
    console.log("I clicked!");
  }

  render() {
    const { error, blog } = this.context;
    let content;
    if (error) {
      content =
        error.error === "Blog doesn't exist" ? (
          <p className="BlogPage--not-founnd">Blog Not Found</p>
        ) : (
          <p className="BlogPage--error">There was an error</p>
        );
    } else if (!blog.id) {
      content = <div className="BlogPage--loading" />;
    } else {
      content = this.renderBlog();
    }
    const { blogId } = this.props.match.params;
    return (
      <Page className="BlogPage">
        {content}
        <section className="BlogPage__blog_list">
          <h3>Recent Blogs</h3>
          <BlogList recent={true} blogId={blogId} onClick={this.handleClick} />
        </section>
      </Page>
    );
  }
}

BlogPage.propTypes = {
  match: PropTypes.object
};

export default BlogPage;
