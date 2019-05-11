$(document).ready(function () {
    tip = d3.tip().attr('class', 'd3-tip').html(function(d) { return d.Freq; });

    var svg = d3.select("#svg1"),
        margin = {
            top: 50,
            right: 20,
            bottom: 40,
            left: 50
        },
        width = +svg.attr("width") - margin.left - margin.right,
        height = +svg.attr("height") - margin.top - margin.bottom,
        g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");


        svg.call(tip);
    var x = d3.scaleBand()
        .rangeRound([0, width])
        .padding(0.3);

    var y = d3.scaleLinear()
        .rangeRound([height, 0]);


    function draw(data) {
        x.domain(data.map(function (d) {
            return d.Month;
        }));

        y.domain([0, d3.max(data, function (d) {
            return Number(d.Freq);
        })]);

        g.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        g.append("g")
            .call(d3.axisLeft(y));

        // text label for the y axis
        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", margin.left)
            .attr("x", (height / 2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text("Frequency");

        svg.append("text")
            .attr("x", (width / 1.8))
            .attr("y", margin.top / 4.2)
            .attr("text-anchor", "middle")
            .style("font-size", "16px")
            .style('font-family', '"Montserrat", sans-serif')
            .text("Crimes Committed per Month");

        g.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return x(d.Month); })
            .attr("width", x.bandwidth())
            .attr("y", function (d) { return y(d.Freq); })
            .attr("height", function (d) { return height - y(d.Freq); })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .attr("fill", "#69b3a2");
    }

    draw(crimesMonth);
})

