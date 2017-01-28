// add axis to the chart
// we'll adjust the margins in this exercise
var margin = { top: 10, right: 20, bottom: 30, left: 40 }

var width = 425 - margin.left - margin.right;
var height = 625 - margin.top - margin.bottom;


var svg = d3.select('.chart')
  .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
  .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

svg.append('rect')
  .attr('width', width)
  .attr('height', height)
  .style('fill', 'lightblue')
  .style('stroke', 'green');


// beginning of exercise16

// create the scale for vertical axis
var yScale = d3.scaleLinear()
  // sets the numerical range
  // change domain to illustrate that d3 auto updates
  // for percentages .domain should be 0-1
  .domain([0, 100])
  .range([height, 0]);

var yAxis = d3.axisLeft(yScale);
// to change tick marks add .ticks
// var yAxis = d3.axisLeft(yScale).ticks(5);
// for percentages, add an additional argument
// var yAxis = d3.axisLeft(yScale).ticks(5, '%');
// for exact values
// var yAxis = d3.axisLeft(yScale).ticksValues([5,10,17,100]);

// append vertical axis
svg.call(yAxis)

// create the scale for horizontal axis
var xScale = d3.scaleTime()
  .domain([new Date(2016, 0, 1), new Date(2017, 0, 1)])
  // for date timeline by hour
  // .domain([new Date(2016, 0, 1, 6), new Date(2016, 0, 1, 12)])

  .range([0, width]);

var xAxis = d3.axisBottom(xScale)
  .ticks(5);
  // additional tick options
  // .tickSizeInner(10)
  // .tickSizeOuter(20)
  // .tickPadding(15)

// append horizontal axis
svg
  // first we need to move the (g) element down
  .append('g')
    .attr('transform', `translate(0, ${height})`)
  .call(xAxis);
