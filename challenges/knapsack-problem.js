/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable) {
  if (!items) return 0;
  let total = 0;
  let value = 0;
  items.sort(function (a, b) {
      return b.value - a.value
  });

  items.reduce( (prev,curr) => {
    total += curr.weight;
    return (total <= weightAvailable) ? value += curr.value : value;
  },{});
  return value
};

let items = [{weight: 1, value : 100}, {weight: 2, value : 2}, {weight: 3, value : 5}];

console.log(solveKnapsack(items,5))
module.exports = solveKnapsack;