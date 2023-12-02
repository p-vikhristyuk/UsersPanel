import React from "react";
const ContentBox = ({ children, ...rest }) => {
  return (
    <div className="content-box" {...rest}>
      {children}
    </div>
  );
};

export default ContentBox;
