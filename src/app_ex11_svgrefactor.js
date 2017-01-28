var scores = [
  { name: 'Darcy', score: 96 },
  { name: 'Billy', score: 83 },
  { name: 'Cindy', score: 91 },
  { name: 'David', score: 96 },
  { name: 'Rick', score: 88 },
]

// version 1 (simplify the chart to just enter items)

// d3.select('.chart')
//   .selectAll('div')
//   .data(scores)
//   .enter()
//     .append('div')
//     .text(function(d) {
//       return d.name;
//     })
//     .style('width', d => d.score + 'px')
//
//     // next move all of these to a css class next
//     .style('color', 'green')
//     .style('height', '50px')
//     .style('background', 'lightgreen')
//     .style('border', '1px solid black');

// // version 2 (move style to css)
//
// d3.select('.chart')
//   .selectAll('div')
//   .data(scores)
//   .enter()
//     .append('div')
//     .text(function(d) {
//       return d.name;
//     })
//     .style('width', d => d.score + 'px')
//     .attr('class', 'bar');


// version 2 (convert to SVG)

d3.select('.chart')
  // first append the svg element
  .append('svg')
    // we need to enlarge the SVG default size
    .attr('width', 225)
    .attr('height', 300)
  // select all rectangles
  .selectAll('rect')
  .data(scores)
  .enter()
    // append rectangles
    .append('rect')
    //calculate vertical positioning using data
    .attr('y', (d, i) => i * 33)
    // px not needed because SVG is assumed to be in pixels
    .style('width', d => d.score)
    .text(function(d) {
      return d.name;
    })
    .attr('class', 'bar');
