// To be used in saga
import { get } from "./api_helper";
import * as url from "./url_helper";

// Posts
export const getPosts = () => get(url.GET_POSTS);

// Post Details
export const getPostDetails = (id) =>
  get(url.GET_POST_DETAILS, {
    params: {
      id: id,
    },
  });
