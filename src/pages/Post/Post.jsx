import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getPosts from "../../services/getPosts";
import ContentBox from "../../components/ContentBox/ContentBox";

const Post = ({ type }) => {
  const { postId } = useParams();
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    if (postId) {
      getPosts({ postId }).then((data) => {
        if (data) {
          setPostData(data);
        }
      });
    }
  }, [postId]);

  return postData ? (
    <section className="post container">
      <nav className="user__nav container">
        <Link className="back-btn" to={"/user/" + postData.userId}>
          Back to user profile
        </Link>
      </nav>
      <h1 className="title">{postData.title}</h1>
      <ContentBox>{postData.body}</ContentBox>
    </section>
  ) : null;
};

export default Post;
