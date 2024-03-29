$(document).ready(function () {
    // $("#title").append(JSON.stringify(data))
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

    var line = d3.line()
        .x(function(d) { return x(d.Month) + 15;})
        .y(function(d) { return y(d.Freq);})
        //.curve(d3.curveMonotoneX);

    var x = d3.scaleBand()

        .rangeRound([0, width])
        .padding(0.5);

    var y = d3.scaleLinear()
        .rangeRound([height, 0]);

    // var tooltip = d3.select("body")
    //     .append("div")
    //     .style("position", "absolute")
    //     .style("z-index", "10")
    //     .style("visibility", "hidden")
    //     .style("background", "#000")
    //     .text("a simple tooltip");

    // d3.select("body")
    //     .selectAll("div")
    //     .data(data)
    //     .enter().append("div")
    //     .style("width", function(d) { return x(d) + "px"; })
    //     .text(function(d) { return d; })
    //     .on("mouseover", function(d){tooltip.text(d); return tooltip.style("visibility", "visible");})
    //     .on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
    //     .on("mouseout", function(){return tooltip.style("visibility", "hidden");});

    function draw(data) {
        x.domain(data.map(function (d) {
            return d.Month;
        }));

        y.domain([0, d3.max(data, function (d) {
            return Number(d.Freq);
        })]);

        g.append("path")
            .attr("class", "line")  
            .attr("d", line(data));

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

        g.selectAll(".dot")
            .data(data)
            .enter().append("circle")
            .attr("class", "dot")
            .attr("cx", function (d) { return x(d.Month) + 15; })
            .attr("cy", function (d) { return y(d.Freq); })
            .attr("r", 5)
            .on("mouseover", tip.show)
            .on("mouseout", tip.hide)
            .attr("fill", "#A01B1B");
    }

    draw(crimesMonth);
})

