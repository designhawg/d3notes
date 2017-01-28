var scores = [
  { name: 'Darcy', score: 96 },
  { name: 'Billy', score: 83 },
  { name: 'Cindy', score: 91 },
  { name: 'David', score: 96 },
  { name: 'Rick', score: 88 },
]

// to get the type to show up we need to create
// graphic elements that can display together
// with the bar elements

// create a bar variable and now this code will
// draw only our text (g) elements
var bar = d3.select('.chart')
  .append('svg')
    .attr('width', 225)
    .attr('height', 300)
  .selectAll('g')
  .data(scores)
  .enter()
    .append('g')
    // this will no longer work as we need a CSS transform
    // for all (g) elements. Also translate needs an X & Y position
    // .attr('y', (d, i) => i * 33)
    .attr('transform', (d, i) => 'translate(0, ' + i * 33 + ')');

  // now we append our rectangles to the (g)
  // text elements
  bar.append('rect')
    .style('width', d => d.score)
    .text(function(d) {
      return d.name;
    })
    .attr('class', 'bar');

  // even with all that work, we still need to append
  // the text element to make things show up
  bar.append('text')
    // we need to modify the y position to make our text align
    .attr('y', 20)
    .attr('x', 5)
    .text(function(d){
      return d.name;
    });

  // when finished show them how this is drawing
  // in the DOM using inspect element
