var margin = { top: 10, right: 20, bottom: 30, left: 40 }

var width = 425 - margin.left - margin.right;
var height = 625 - margin.top - margin.bottom;


var svg = d3.select('.chart')
  .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
  .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

// beginning of exercise17

// first add data

var data = [
  { score: 63, subject: 'Math' },
  { score: 98, subject: 'Journalism' },
  { score: 80, subject: 'Foosball' }
];

var yScale = d3.scaleLinear()
  .domain([0, 100])
  .range([height, 0]);

var yAxis = d3.axisLeft(yScale);
svg.call(yAxis)

// adjust to scaleBand
var xScale = d3.scaleBand()
  // add padding later
  .paddingInner(0.2)
  .paddingOuter(0.5)
  // add datamap instead of time
  .domain(data.map(d => d.subject))
  .range([0, width]);

var xAxis = d3.axisBottom(xScale)
  .ticks(5)
  .tickSize(10)
  .tickPadding(5);

svg
  .append('g')
    .attr('transform', `translate(0, ${height})`)
  .call(xAxis);
  // later add this to rotate labels
  // .selectAll('text')
  // .style('text-anchor', 'end')
  // .attr('transform', 'rotate(-45)');


// add data via datajoin
svg.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('x', d => xScale(d.subject))
  .attr('y', d => yScale(d.score))
  .attr('width', d => xScale.bandwidth())
  .attr('height', d => height - yScale(d.score));
