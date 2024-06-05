function cloneArray(array) {
  // input tikrinimas
  if (!Array.isArray(array)) {
    throw new TypeError("Input must be an array");
  }

  return [...array];
}

module.exports = cloneArray;
