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
  },
  deleteBlog(blogId) {
    return fetch(`${config.API_ENDPOINT}/blogs/${blogId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    }).then(res => {
      return !res.ok ? res.json().then(e => Promise.reject(e)) : res;
    });
  },
  patchBlog(blogId, blogFields) {
    return fetch(`${config.API_ENDPOINT}/blogs/${blogId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(blogFields)
    }).then(res => {
      return !res.ok ? res.json().then(e => Promise.json(e)) : res;
    });
  }
};

export default BlogApiService;
