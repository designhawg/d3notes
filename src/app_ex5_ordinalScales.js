// ordinalScales map to specific values based on specific inputs

var ordinalScale = d3.scaleOrdinal()
  .domain(["poor", "good", "great"])
  .range(['red', 'white', 'green']);
  // the arrays map to one another based on position in the array
  // use for non-numeric values that need specific output values

console.log(ordinalScale("good")); // maps to red
console.log(ordinalScale("great"); // maps to white
console.log(ordinalScale("poor"))); // maps to green
