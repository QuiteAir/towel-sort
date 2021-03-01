
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let sortFromRight = false,
  result = [];
  if (!matrix) return result;

  for (let i of matrix) {
    if (sortFromRight) {
      for (let j = i.length - 1; j > -1; j--) {
        result.push(i[j]);
      }
      sortFromRight = false;
    }
    else {
      result.push(...i);
      sortFromRight = true;
    }
  }
  return result;
}
