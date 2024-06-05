const subtract = require("./subtract");

test("subtracts two numbers", () => {
  expect(subtract(10, 3)).toBe(7);
});

test("subtracks two negative numbers", () => {
  expect(subtract(-3, -5)).toBe(2);
});

test("subtracks two float numbers", () => {
  expect(subtract(0.25, 1.25)).toBe(-1);
  expect(subtract(-1.5, -1.5)).toBe(0);
});
