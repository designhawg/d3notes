var scores = [
  { name: 'Darcy', score: 96 },
  { name: 'Billy', score: 83 },
  { name: 'Cindy', score: 91 },
  { name: 'David', score: 96 },
  { name: 'Rick', score: 88 },
]

var bar = d3.select('.chart')
  .append('svg')
    .attr('width', 225)
    .attr('height', 300)
  .selectAll('g')
  .data(scores)
  .enter()
    .append('g')
    .attr('transform', (d, i) => 'translate(0, ' + i * 33 + ')');

  // lets simplify the code to make it easier to read
  function fade (selection, opacity) {
    selection.style('fill-opacity', opacity);
  }

  // refactor with new functions for fade
  bar.append('rect')
    .style('width', d => d.score)
    .attr('class', 'bar')
    .on('mouseover', function(d, i, elements) {
      d3.selectAll(elements)
        .filter(':not(:hover)')
        // use the call method to replace style setting
        // .style('fill-opacity', 0.2);
        .call(fade, 0.2);
    })

    .on('mouseout', function(d, i, elements) {
      d3.selectAll(elements)
        // .style('fill-opacity', 1);
        .call(fade, 1);
    });


  bar.append('text')
    .attr('y', 20)
    .attr('x', 5)
    .text(function(d){
      return d.name;
    });
