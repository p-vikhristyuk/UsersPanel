const request = async ({ url }) => {
  try {
    return await fetch(process.env.REACT_APP_API_URL + url)
      .then((response) => response.json())
      .catch((err) => console.log(err));
  } catch (err) {
    console.error(err);
  }
};

export default request;
