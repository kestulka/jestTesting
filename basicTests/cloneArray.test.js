const cloneArray = require("./cloneArray");

describe("cloneArray", () => {
  it("should clone an array", () => {
    const array = [1, 2, 3];
    const clonedArray = cloneArray(array);

    expect(clonedArray).toEqual(array);
    expect(clonedArray).not.toBe(array); // patikrinti ar kitas reference
  });

  it("should return an empty array when input is an empty array", () => {
    const array = [];
    const clonedArray = cloneArray(array);

    expect(clonedArray).toEqual(array);
    expect(clonedArray).not.toBe(array);
  });

  it("should handle arrays with different types of elements", () => {
    const array = [1, "two", { three: 3 }];
    const clonedArray = cloneArray(array);

    expect(clonedArray).toEqual(array);
    expect(clonedArray).not.toBe(array);
  });

  // edge cases

  it("should return an empty array when input is an empty array", () => {
    const array = [];
    const clonedArray = cloneArray(array);

    expect(clonedArray).toEqual(array);
    expect(clonedArray).not.toBe(array);
  });

  it("should clone an array with one element", () => {
    const array = [1];
    const clonedArray = cloneArray(array);

    expect(clonedArray).toEqual(array);
    expect(clonedArray).not.toBe(array);
  });

  it("should handle arrays with different types of elements", () => {
    const array = [1, "two", { three: 3 }];
    const clonedArray = cloneArray(array);

    expect(clonedArray).toEqual(array);
    expect(clonedArray).not.toBe(array);
  });

  it("should throw an error if input is not an array", () => {
    expect(() => cloneArray(null)).toThrow();
    expect(() => cloneArray(undefined)).toThrow();
    expect(() => cloneArray(123)).toThrow();
    expect(() => cloneArray("string")).toThrow();
    expect(() => cloneArray({})).toThrow(); // butu failed, jei netikrintume input funkcijoje
  });
});
