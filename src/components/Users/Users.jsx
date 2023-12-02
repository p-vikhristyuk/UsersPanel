import React, { useMemo, useState } from "react";
import ContentBox from "../ContentBox/ContentBox";
import { Link, useHistory, useLocation } from "react-router-dom";
import { userFields } from "../../constants/userFields";
import Search from "../Search/Search";

const Users = ({ list, onSearch, searchValue }) => {
  const currentSearch = new URLSearchParams(useLocation().search);
  const history = useHistory();
  const [sorting, setSorting] = useState(currentSearch.get("sort") || "asc");
  const sortedUsers = useMemo(() => {
    if (!list?.length) return [];
    return [...list].sort((a, b) => {
      if (a.username.toLowerCase() < b.username.toLowerCase()) {
        return sorting === "asc" ? -1 : 1;
      }
      if (a.username.toLowerCase() > b.username.toLowerCase()) {
        return sorting === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [sorting, list]);

  const onSortChange = () => {
    const newSortType = sorting === "asc" ? "desc" : "asc";
    setSorting(newSortType);
    currentSearch.set("sort", newSortType);
    history.replace({
      search: currentSearch.toString(),
    });
  };

  return (
    <div className="users container">
      <ContentBox>
        <h1 className="title">Users:</h1>
        {onSearch && <Search value={searchValue} onChange={onSearch} />}
        <div className="users__list">
          <div className="users__row">
            {userFields.map((field) => (
              <span
                className="users__row-cell users__row-cell--heading"
                key={field.replace(" ", "")}
              >
                {field}
                {field === "User name" && (
                  <button
                    onClick={onSortChange}
                    className="users__row-cell-sort"
                  >
                    {sorting === "desc" ? <>&uarr;</> : <>&darr;</>}
                  </button>
                )}
              </span>
            ))}
          </div>
          {sortedUsers.length > 0 ? (
            sortedUsers.map((user) => (
              <Link
                className="users__row"
                to={"/user/" + user.id}
                key={user.id}
              >
                {userFields.map((cell) => {
                  const value = user[cell?.toLowerCase().replace(" ", "")];
                  return (
                    <span
                      className="users__row-cell"
                      key={"field" + cell?.replace(" ", "")}
                      title={value}
                    >
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
