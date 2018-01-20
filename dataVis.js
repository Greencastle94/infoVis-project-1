
// PARSING DATA
var rawData = "data.csv";
var rawData = "testData.csv";
var dataArray = [];
var barChart = [0]*12;

var width = 960,
    height = 500;

var svg = d3.select("body")
            .append("svg")
            .attr("width",958)
            .attr("height",500);
            // .attr("preserveAspectRatio", "xMinYMin meet")
            // .attr("viewBox", "-20 -40 192 100")
            // .classed("svg-content", true);
var margin = {top: 20, right: 20, bottom: 30, left: 40};
var width = +svg.attr("width") - margin.left - margin.right;
var height = +svg.attr("height") - margin.top - margin.bottom;

// X-axis is discrete while Y-axis is continuous
var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// PARSING TEST
d3.csv(rawData, function(d) {
  d.frequency = +d.frequency; //Changing into integer
  return d;
}, function(error, data) {
  if (error) throw error;
    // How many X-axis values (because discrete)
    x.domain(data.map(function(d) { return d.letter; }));
    // Max value for Y-axis
    y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

    g.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    g.append("g")
        .attr("class", "y axis")
        .call(d3.axisLeft(y).ticks(10, "%"))
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Frequency");

    g.selectAll(".bar")
      .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.letter); })
        .attr("y", function(d) { return y(d.frequency); })
        .attr("width", x.bandwidth())
        .attr("height", function(d) { return height - y(d.frequency); });
});

// Parsing data from CSV file to objects in an array
// CSV
/*
d3.csv(rawData, function(d) {
  return {
    alias : d.Alias,
    major : d["What is your Major?"],
    personalInfo : d["Please, tell me about yourself. What interest you? Do you have any hobbies?"],
    skillViz : +d["How would you rate your Information Visualization skills?"],
    skillStats : +d["How would you rate your statistical skills?"],
    skillMath : +d["How would you rate your mathematics skills?"],
    skillArt : +d["How would you rate your drawing and artistic skills?"],
    skillComp : +d["How would you rate your computer usage skills?"],
    skillProg : +d["How would you rate your programming skills?"],
    skillGraph : +d["How would you rate your computer graphics programming skills?"],
    skillHCI : +d["How would you rate your human-computer interaction programming skills?"],
    skillUX : +d["How would you rate your user experience evaluation skills?"],
    skillComm : +d["How would you rate your communication skills?"],
    skillCollab : +d["How would you rate your collaboration skills?"],
    skillRepo : +d["How would you rate your code repository skills?"]
  };
}, function(data) {
  //console.log(data[0]);
  dataArray.push(data);
});

var svg = d3.select("body").append("svg")
            .attr("height","100%")
            .attr("width","100%");

svg.selectAll("rect")
    .data(barChart)
    .enter().append("rect")
            .attr("class", "bar")
            .attr("height", function(d, i) {return (d * 10)})
            .attr("width", "40")
            .attr("x", function(d, i) {return i * 60;})
            .attr("y", function(d, i) {return 400 - (d * 10)});

svg.selectAll("text")
    .data(barChart)
    .enter().append("text")
    .text(function(d) {return d;})

svg.selectAll("text")
    .data(dataArray)
    .enter().append("text")
    .text(function(d) {return d;})
          .attr("class", "text")
          .attr("x", function(d, i) {return (i * 60) + 12})
          .attr("y", function(d, i) {return 420 - (d * 10)});
*/
