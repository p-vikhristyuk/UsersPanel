import React from "react";
import ContentBox from "../ContentBox/ContentBox";
import { Link } from "react-router-dom";

const DescriptionList = ({ heading, list }) => {
  return (
    <article className="description-list">
      {heading && <h2 className="title title--02">{heading}</h2>}
      <ContentBox>
        {list &&
          list.length &&
          list.map((row, index) => (
            <div
              className="description-list__row"
              key={index + (row?.heading || row.value)}
            >
              {row.heading && (
                <div className="description-list__row-heading">
                  {row?.heading}
                </div>
              )}
              <div className="description-list__row-value">
                {row.link ? (
                  <Link to={row.link} className="blue">
                    {row.value}
                  </Link>
                ) : (
                  row.value
                )}
              </div>
            </div>
          ))}
      </ContentBox>
    </article>
  );
};

export default DescriptionList;
