// this is all about how to load data into the project

// helpers for working with json
d3.json("/data/data.json", function(data){

  // .min finds the lowest number among the items tagged age
  var min = d3.min(data, function(d){
    return d.age;
  });
  console.log(min);
  // .max finds the highest number among the items tagged age
  var max = d3.max(data, function(d){
    return d.age;
  });
  console.log(max);
  // .extent returns a two element array that displays hi/low
  var extent = d3.extent(data, function(d){
    return d.age;
  });
  console.log(extent);

  // let's create a linear scale using .extent
  var scale = d3.scaleLinear()
  .domain(extent)
  .range([0,600]);
  // this provides a pixel scale of 264 as 24 is roughly halfway between on the scale provided by extent
  console.log(scale(24));

  // let's get a unique .set of values from the data
  var ages = d3.set(data, function (d) {
    return d.age;
  });
  console.log(ages.values());

})


// // helpers for working with json
// d3.json("/data/data.json", function(data){
//   console.log(data);
// })
//
// // helpers for working with csv
// d3.csv("data/data.csv", function(data){
//   console.log(data);
// })
//
// // helpers for working with y
// d3.tsv("data/data.tsv", function(data){
//   console.log(data);
// })
