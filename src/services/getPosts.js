import request from "./request";

const getUserPosts = (args) => {
  const targetPost = args?.postId || "";
  return request({
    url: "/posts/" + targetPost,
  });
};

export default getUserPosts;
