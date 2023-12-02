import request from "./request";

const getUsersAlbums = ({ userId }) => {
  return request({
    url: `/users/${userId}/albums`,
  });
};

export default getUsersAlbums;
