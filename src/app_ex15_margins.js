// create margins for axies

// we start with our margin variable zeroed out
// var margin = { top: 0, right: 0, bottom: 0, left: 0 }

// part 2 set the margins to show up...
var margin = { top: 0, right: 0, bottom: 25, left: 25 }


// width and height are calculated minus specific margin values
var width = 425 - margin.left - margin.right;
var height = 625 - margin.top - margin.bottom;


var svg = d3.select('.chart')
  .append('svg')
    // we always want the SVG itself to have the margin values added back in
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
  // we also will still need a place for our axies to reside
  .append('g')
    // ES6 template string
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

// rectangle has the same dimensions as our SVG
svg.append('rect')
  .attr('width', width)
  .attr('height', height)
  .style('fill', 'lightblue')
  .style('stroke', 'green');
