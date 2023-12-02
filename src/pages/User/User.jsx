import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getUserData from "../../services/getUserData";
import UserDescription from "../../components/UserDescription/UserDescription";
import getPosts from "../../services/getPosts";
import getUsersAlbums from "../../services/getUserAlbums";

const User = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [usersPosts, setUsersPosts] = useState(null);
  const [usersAlbums, setUsersAlbums] = useState(null);

  useEffect(() => {
    if (userId) {
      getUserData({ userId }).then((data) => {
        if (data) {
          setUserData(data);
        }
      });

      getPosts().then((data) => {
        if (data) {
          const handledData = data.filter((item) => item.userId === Number(userId));
          setUsersPosts(handledData);
        }
      });
      getUsersAlbums({ userId }).then((data) => {
        if (data) {
          setUsersAlbums(data);
        }
      });
    }
  }, [userId]);

  return (
    <section className="user">
      <nav className="user__nav container">
        <Link className="back-btn" to="/">
          Back to list with users
        </Link>
      </nav>
      <UserDescription {...userData} posts={usersPosts} albums={usersAlbums} />
    </section>
  );
};

export default User;
