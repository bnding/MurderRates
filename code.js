$(document).ready(function () {
    // $("#title").append(JSON.stringify(data))

    var svg = d3.select("svg"),
        margin = {
            top: 20,
            right: 20,
            bottom: 30,
            left: 50
        },
        width = +svg.attr("width") - margin.left - margin.right,
        height = +svg.attr("height") - margin.top - margin.bottom,
        g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var barWidth = width/24;

    var x = d3.scaleBand()
        .domain(["January", "February", "March", "April", "May", "June", "July", "August", "September", 
                    "October", "November", "December"])
        .rangeRound([0, width])
        .padding(0.5);

    var y = d3.scaleLinear()
        .rangeRound([height, 0]);

    function draw(data) {
        

        y.domain([0, d3.max(data, function (d) {
            return Number(d.Freq);
        })]);

        g.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))

        g.append("g")
            .call(d3.axisLeft(y))
            .append("text")
            .attr("fill", "#000")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text("Frequency");

        g.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return x(d.Month); })
            .attr("width", barWidth)
            .attr("y", function (d) { return y(d.Freq); })
            .attr("height", function (d) { return height - y(d.Freq); });
        


    }

    draw(crimesMonth);




})

