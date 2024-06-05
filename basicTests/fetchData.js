const fetch = require("node-fetch");

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

module.exports = fetchData;
