import config from "../config";
import TokenService from "./token-service";

const BlogApiService = {
  getBlogs() {
    return fetch(`${config.API_ENDPOINT}/blogs`, {
      headers: {}
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getBlog(blogId) {
    return fetch(`${config.API_ENDPOINT}/blogs/${blogId}`, {
      headers: {}
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postBlog(title, picture, content) {
    return fetch(`${config.API_ENDPOINT}/blogs`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        title,
        picture,
        content
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default BlogApiService;
