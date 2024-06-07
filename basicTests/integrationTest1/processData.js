import fetchData from "./mockDatabase";

async function processData() {
  const data = await fetchData();
  return `Processed: ${data}`;
}

export default processData;
