const fetchData = require("./fetchData");
const fetch = require("node-fetch");

jest.mock("node-fetch"); // naudojamas simuliuoti http requestus

describe("fetchData", () => {
  it("fetches data sucessfully from an API", async () => {
    fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue({ data: "12345" }),
    });

    const data = await fetchData("https://api.example.com/data");
    console.log("Fetched data:", data); // kad butu aiskiau galima pasiloginti kas vyksta
    expect(data).toEqual({ data: "12345" });
  });

  it("fetches data with error from an api", async () => {
    fetch.mockRejectedValue(new Error("API is down"));

    await expect(fetchData("https://api.example.com/data")).rejects.toThrow(
      "API is down",
    );
  });

  it("fetches data with an empty response", async () => {
    fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue({}),
    });

    const data = await fetchData("https://api.example.com/empty");
    console.log("Fetched empty data:", data);
    expect(data).toEqual({});
  });

  it("fetches data with a different structure", async () => {
    fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue({ id: 1, name: "Test" }),
    });

    const data = await fetchData("https://api.example.com/other");
    console.log("Fetched different structure data:", data);
    expect(data).toEqual({ id: 1, name: "Test" });
  });

  it("handles network error", async () => {
    fetch.mockRejectedValue(new Error("Network Error"));

    await expect(
      fetchData("https://api.example.com/network-error"),
    ).rejects.toThrow("Network Error");
  });

  it("handles timeout error", async () => {
    fetch.mockRejectedValue(new Error("Timeout Error"));
    await expect(fetchData("https://api.example.com/timeout")).rejects.toThrow(
      "Timeout Error",
    );
  });
});
