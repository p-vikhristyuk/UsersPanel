import React from "react";
import ContentBox from "../ContentBox/ContentBox";
import { Link } from "react-router-dom";
import { userFields } from "../../constants/userFields";
import Search from "../Search/Search";

const Users = ({ list, onSearch, searchValue }) => {
  return (
    <div className="users container">
      <ContentBox>
        <h1 className="title">Users:</h1>
        {onSearch && <Search value={searchValue} onChange={onSearch} />}
        <div className="users__list">
          <div className="users__row">
            {userFields.map((field) => (
              <span className="users__row-cell users__row-cell--heading" key={field.replace(" ", "")}>
                {field}
              </span>
            ))}
          </div>
          {list && list.length > 0 ? (
            list.map((user) => (
              <Link className="users__row" to={"/user/" + user.id} key={user.id}>
                {userFields.map((cell) => {
                  const value = user[cell?.toLowerCase().replace(" ", "")];
                  return (
                    <span className="users__row-cell" key={"field" + cell?.replace(" ", "")} title={value}>
                      {value}
                    </span>
                  );
                })}
              </Link>
            ))
          ) : (
            <div className="users__list-empty">No users</div>
          )}
        </div>
      </ContentBox>
    </div>
  );
};

export default Users;
