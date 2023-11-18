function transformToObjects(numberArray) {
  // Todo: Add your logic
  // should return an array of objects
  const index = numberArray.map((item) => ({ val: item }));

  return index;
}

console.log(transformToObjects([1, 2, 3]));
