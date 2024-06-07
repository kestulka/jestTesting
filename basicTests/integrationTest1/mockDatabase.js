const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data from database");
    }, 100);
  });
};
export default fetchData;
