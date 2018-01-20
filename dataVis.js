var dataArray = [23, 13, 21, 14, 37, 15, 18, 34, 30];
var dataSheet = "data.csv";
var svg = d3.select("body").append("svg")
            .attr("height","100%")
            .attr("width","100%");

svg.selectAll("rect")
    .data(dataArray)
    .enter().append("rect")
            .attr("class", "bar")
            .attr("height", function(d, i) {return (d * 10)})
            .attr("width", "40")
            .attr("x", function(d, i) {return i * 60;})
            .attr("y", function(d, i) {return 400 - (d * 10)});

svg.selectAll("text")
    .data(dataArray)
    .enter().append("text")
    .text(function(d) {return d;})
          .attr("class", "text")
          .attr("x", function(d, i) {return (i * 60) + 12})
          .attr("y", function(d, i) {return 420 - (d * 10)});

/*
d3.csv(dataSheet, function(d) {
  return {
    alias : d.Alias,
    major : d.What is your Major?,
    personalInfo : d.Please, tell me about yourself. What interest you? Do you have any hobbies?,
    skillViz : d.How would you rate your Information Visualization skills?,
    skillStats : d.How would you rate your statistical skills?,
    skillMath : d.How would you rate your mathematics skills?,
    skillArt : d.How would you rate your drawing and artistic skills?,
    skillComp : d.How would you rate your computer usage skills?,
    skillProg : d.How would you rate your programming skills?,
    skillGraph : d.How would you rate your computer graphics programming skills?,
    skillHCI : d.How would you rate your human-computer interaction programming skills?,
    skillUX : d.How would you rate your user experience evaluation skills?,
    skillComm : d.How would you rate your communication skills?,
    skillCollab : d.How would you rate your collaboration skills?,
    skillRepo : d.How would you rate your code repository skills?,
  };
}, function(data) {
  console.log(data[0]);
});
*/

d3.csv(dataSheet, function(data) {
  console.log(data[0]);
});
