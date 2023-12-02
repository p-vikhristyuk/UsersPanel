import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getAlbumPhotos from "../../services/getAlbumPhotos";
import Popup from "../../components/Popup/Popup";
import getAlbumInfo from "../../services/getAlbumInfo";

const Album = () => {
  const [albumPhotos, setAlbumPhotos] = useState(null);
  const { albumId, userId } = useParams();
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [albumInfo, setAlbumInfo] = useState(null);

  useEffect(() => {
    if (albumId) {
      getAlbumPhotos({ albumId }).then((data) => {
        setAlbumPhotos(data);
      });
      getAlbumInfo({ albumId }).then((data) => {
        setAlbumInfo(data);
      });
    }
  }, [albumId]);

  return (
    <section className="album container">
      {albumInfo?.userId && (
        <nav className="user__nav container">
          <Link className="back-btn" to={"/user/" + userId}>
            Back to user profile
          </Link>
        </nav>
      )}
      {albumInfo?.title && <h1 className="title">{albumInfo.title}</h1>}
      {albumPhotos && (
        <div className="album__list">
          {albumPhotos.map((photoItem) => (
            <div className="album__item" key={photoItem.id} onClick={() => setSelectedPhoto(photoItem)}>
              <img src={photoItem.thumbnailUrl} alt="" />
            </div>
          ))}
        </div>
      )}
      <Popup isOpened={selectedPhoto} onClose={() => setSelectedPhoto(null)}>
        {selectedPhoto && (
          <figure className="album__photo">
            <img className="album__photo-item" src={selectedPhoto.url} alt={selectedPhoto.title} />
            <figcaption className="album__photo-description">{selectedPhoto.title}</figcaption>
          </figure>
        )}
      </Popup>
    </section>
  );
};

export default Album;
