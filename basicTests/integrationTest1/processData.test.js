import processData from "./processData";

test("process data from database", async () => {
  const result = await processData();
  expect(result).toBe("Processed: data from database");
});
