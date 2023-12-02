import request from "./request";

const getAlbumPhotos = ({ albumId }) => {
  return request({
    url: `/albums/${albumId}/photos`,
  });
};

export default getAlbumPhotos;
