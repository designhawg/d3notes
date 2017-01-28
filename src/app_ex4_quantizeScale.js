// quantizeScales map to specific values within a range

var quantizeScale = d3.scaleQuantize()
  .domain([0,100])
  .range(['red', 'white', 'green']);
  // the more items added to range,
  // the more bands to map to

console.log(quantizeScale(22)); // maps to red
console.log(quantizeScale(50)); // maps to white
console.log(quantizeScale(88)); // maps to green

// this actually outputs the range that white maps to
console.log(quantizeScale.invertExtent('white'));
