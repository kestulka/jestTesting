const sum = require("./sum");

test("adds two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds two negative numbers", () => {
  expect(sum(-1, -2)).toBe(-3);
});

test("adds a positive and a negative number", () => {
  expect(sum(1, -2)).toBe(-1);
});

test("adds zero", () => {
  expect(sum(0, 0)).toBe(0);
  expect(sum(1, 0)).toBe(1);
  expect(sum(0, 1)).toBe(1);
  expect(sum(-1, 0)).toBe(-1);
});

test("adds floating-point numbers", () => {
  expect(sum(1.5, 2.5)).toBe(4);
  expect(sum(-1.5, -2.5)).toBe(-4);
  expect(sum(1.5, -2.5)).toBe(-1);
});
