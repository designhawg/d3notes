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
    .attr('transform', (d, i) => 'translate(0, ' + i * 33 + ')');

  // add interactivity on mouseover, mouseout
  bar.append('rect')
    .style('width', d => d.score)
    .attr('class', 'bar')
    // to add basic interactivity we want to create
    // hover states that track whatever isn't being
    // selected and turns those items down

    // this takes three arguments
    .on('mouseover', function(d, i, elements) {
      console.log(elements) // show what elements is
      d3.selectAll(elements)
        // these are CSS psuedo elements
        .filter(':not(:hover)')
        .style('fill-opacity', 0.2);
    })

    // reset everything on mouseout
    .on('mouseout', function(d, i, elements) {
      d3.selectAll(elements)
        .style('fill-opacity', 1);
    });


  bar.append('text')
    .attr('y', 20)
    .attr('x', 5)
    .text(function(d){
      return d.name;
    });
