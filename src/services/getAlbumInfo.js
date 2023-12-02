import request from "./request";

const getAlbumInfo = ({ albumId }) => {
  return request({
    url: `/albums/${albumId}`,
  });
};

export default getAlbumInfo;
