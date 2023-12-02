import React from "react";
import DescriptionList from "../DescriptionList/DescriptionList";
import { userFields } from "../../constants/userFields";

const UserDescription = ({ name, address = {}, posts, albums, ...args }) => {
  const descriptionListData = userFields
    .filter((field) => field !== "Name")
    .map((field) => {
      const fieldName = field?.toLowerCase()?.replace(/\s/g, "");
      return {
        heading: field,
        value: args[fieldName],
      };
    });

  const addressData = Object.keys(address)
    .filter((field) => field !== "geo")
    .map((field) => {
      const fieldName = field;
      return {
        heading: fieldName.charAt(0).toUpperCase() + fieldName.slice(1),
        value: address[field],
      };
    });

  const postsData = posts?.map((post) => ({
    value: post.title,
    link: `/user/${args.id}/post/${post.id}`,
  }));

  const albumsData = albums?.map((album) => ({
    value: album.title,
    link: `/user/${args.id}/album/${album.id}`,
  }));

  return (
    <div className="user-description container">
      <h1 className="title">{name}</h1>
      <div className="user-description__holder">
        <DescriptionList heading="Common info" list={descriptionListData} />
        <DescriptionList heading="Location" list={addressData} />
        <DescriptionList heading="Posts" list={postsData} />
        <DescriptionList heading="Albums" list={albumsData} />
      </div>
    </div>
  );
};

export default UserDescription;
