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
    
    //bandwidth() seems to do the same thing here
    //var barWidth = width/24;

    var x = d3.scaleBand()
        // .domain(["January", "February", "March", "April", "May", "June", "July", "August", "September", 
        //              "October", "November", "December"])
        .rangeRound([0, width])
        .padding(0.3);

    var y = d3.scaleLinear()
        .rangeRound([height, 0]);

    /*
    * Bar Graph Drawer 
    * Function can be mad modular by renaming data to [{"x":"xData", "y":"yData"}]
    * This will chang eit so we don't need to use d.Month but d.x instead
    */
    function draw(data) {
        x.domain(data.map(function (d) {
            return d.Month;
        }));

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
            .attr("width", x.bandwidth())
            .attr("y", function (d) { return y(d.Freq); })
            .attr("height", function (d) { return height - y(d.Freq); });
    }

    draw(crimesMonth);

})

