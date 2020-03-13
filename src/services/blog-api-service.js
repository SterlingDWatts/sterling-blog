import config from "../config";

const BlogApiService = {
  getBlogs() {
    return fetch(`${config.API_ENDPOINT}/blogs`, {
      headers: {}
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default BlogApiService;
