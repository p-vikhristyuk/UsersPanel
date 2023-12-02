import React from "react";
import { Helmet } from "react-helmet";
const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404</title>
        <meta
          name="description"
          content="Getting users from fake API, managing all data related to users (info, posts, albums)"
        />
      </Helmet>
      <h1 className="title container text-center">404 Page not found</h1>
    </>
  );
};

export default NotFound;
