// d3 provides a way to pull dates and map time between dates

// these scales always seem to have a domain and range

var timeScale = d3.scaleTime()
  // when Date is left empty it is implied to be today
  .domain([new Date(2016,0,1), new Date()])
  .range([0,100]);

  // as I run these just after midnight on NYE I log the following
  console.log(timeScale(new Date(2016,6,3))); // 50
  console.log(timeScale(new Date(2016,9,9))); // 77
  console.log(timeScale(new Date(2016,3,4))); // 25

  // inversion basically says what date is % between
  console.log(timeScale.invert(50)); // July 2
