/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(arr, num) {
  const numbers = new Set();
  const solution = new Map();

  for (let element of arr) {
    numbers.add(element);
    let diff = num - element;
    if (numbers.has(diff) && diff !== element)
      solution.set(Math.min(diff, element), Math.max(element, diff));
  }

  return Array.from(solution);
}

module.exports = sumPairs;
