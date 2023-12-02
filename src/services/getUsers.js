import request from "./request";

const getUsers = ({ search }) => {
  //console.log(search);
  return request({
    url: "/users" + search,
  });
};

export default getUsers;
