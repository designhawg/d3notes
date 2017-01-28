// document.body.innerHTML = `<h1>${d3.version}</h1>`;

// this is what happens before you apply clamp to the output
var linearScale = d3.scaleLinear()
  .domain([0,100])
  .range([0,1]);

console.log(linearScale(-20));
console.log(linearScale(50));
console.log(linearScale(105));

// with clamp applied, the outputs stay within the range
var linearScale = d3.scaleLinear()
  .domain([0,100])
  .range([0,1])
  .clamp(true);

console.log(linearScale(-20));
console.log(linearScale(50));
console.log(linearScale(105));

// while linearScale typically takes a domain value
// and maps it to the range, invert allows you to
// take a range value and map it to the domain
console.log(linearScale.invert(.5));
