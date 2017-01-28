var scores = [
  { name: 'Darcy', score: 96 },
  { name: 'Billy', score: 83 },
  { name: 'Cindy', score: 91 },
  { name: 'David', score: 96 },
  { name: 'Rick', score: 88 },
]

// version 1 (just display names)

// the element that contains the datajoin
// is most likely the update selecton
var update = d3.select('.chart')
  .selectAll('div')
  .data(scores)

// being that update holds the data,
// we need to enter elements onto the page with data
update.enter()
  .append('div')
  // put the individual names onto the page
  .text(function(d) {
    return d.name;
  })
  .style('color', 'green');



// // version 2: show the update
// // also update is meant to UPDATE elements already present
// var update = d3.select('.chart')
//   .selectAll('div')
//   // there is a second parameter known as the key function
//   .data(scores, function (d){
//     // does the name exist? if so, pass the data to it
//     // if not, create the element
//     return d ? d.name : this.innerText;
//   })
//   // adding a style to show the elements just being updated
//   // but not created by our code
//   .style('color', 'blue');


// // being that update holds the data,
// // we need to enter elements onto the page with data
// var enter = update.enter()
//   // create a div for anything in data
//   // that is without a DOM element
//   .append('div')
//   // d represents the .data element in d3
//   .text(function(d){
//     return d.name;
//   })
//   // now that we've created the divs, we can style them
//   .style('color', 'green');

// // we need to remove anything on the page
// // that is not binded with our data (karl)
// update.exit().remove();

// // this takes the enter variable and merges it with
// // previously existing data on the page
// update.merge(enter)
//   // this sets the width of the bar
//   .style('width', d => d.score + 'px')
//   .style('height', '50px')
//   .style('background', 'lightgreen')
//   .style('border', '1px solid black');
