import React, { useEffect, useState } from "react";
import getUsers from "../../services/getUsers";
import Users from "../../components/Users/Users";
import { useHistory, useLocation } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";

const Main = () => {
  const location = useLocation();
  const existedSearchParams = new URLSearchParams(location.search);
  const [users, setUsers] = useState(null);
  const [searchValue, setSearchValue] = useState(
    existedSearchParams?.get("username"),
  );
  const deferredQuery = useDebounce({ value: searchValue });

  const history = useHistory();
  useEffect(() => {
    getUsers({
      search: deferredQuery ? `?username=${deferredQuery}` : "",
    }).then((data) => {
      if (data) {
        setUsers(data);
      }
    });
  }, [deferredQuery]);

  const onSearch = (value) => {
    setSearchValue(value);
    const params = new URLSearchParams(value ? { username: value } : "");
    history.replace({ pathname: location.pathname, search: params.toString() });
  };

  return (
    <section className="main-page">
      <Users list={users} onSearch={onSearch} searchValue={searchValue || ""} />
    </section>
  );
};

export default Main;
