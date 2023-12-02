import request from "./request";

const getUserData = ({ userId }) => {
  return request({
    url: "/users/" + userId,
  });
};

export default getUserData;
