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
        .rangeRound([0, width - 250])
        .padding(0.7);

    var y = d3.scaleLinear()
        .rangeRound([height, 0]);

    function draw(data) {
        x.domain(data.map(function (d) {
            return d.Victim_Sex;
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
            .attr("x", (width / 2.5))             
            .attr("y", margin.top / 2.3)
            .attr("text-anchor", "middle")  
            .style("font-size", "16px")  
            .style('font-family', '"Montserrat", sans-serif')
            .text("Number of Victims by Sex");

        g.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return x(d.Victim_Sex); })
            .attr("width", x.bandwidth())
            .attr("y", function (d) { return y(d.Freq); })
            .attr("height", function (d) { return height - y(d.Freq); })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .attr("fill", "#69b3a2");
    }

    draw(victSex);

})

$(document).ready(function () {
    tip = d3.tip().attr('class', 'd3-tip').html(function(d) { return d.Freq; });

    var svg = d3.select("#svg2"),
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
        .rangeRound([0, width-100])
        .padding(0.6);

    var y = d3.scaleLinear()
        .rangeRound([height, 0]);

    function draw(data) {
        x.domain(data.map(function (d) {
            return d.Victim_Race;
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
            .attr("x", (width / 2.5))             
            .attr("y", margin.top / 2)
            .attr("text-anchor", "middle")  
            .style("font-size", "16px") 
            .style('font-family', '"Montserrat", sans-serif')
            .text("Number of Victims by Race");

        g.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return x(d.Victim_Race); })
            .attr("width", x.bandwidth())
            .attr("y", function (d) { return y(d.Freq); })
            .attr("height", function (d) { return height - y(d.Freq); })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .attr("fill", "#69b3a2");
    }

    draw(victRace);

})

$(document).ready(function () {
    tip = d3.tip().attr('class', 'd3-tip').html(function(d) { return d.Freq; });

    var svg = d3.select("#svg3"),
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
        .rangeRound([0, width-10])
        .padding(0.25);

    var y = d3.scaleLinear()
        .rangeRound([height, 0]);

    function draw(data) {
        x.domain(data.map(function (d) {
            return d.Victim_Age;
        }));

        y.domain([0, d3.max(data, function (d) {
            return Number(d.Freq);
        })]);

        g.append("g")
            .attr("transform", "translate(0," + (height) + ")")
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
            .attr("x", (width / 1.9))             
            .attr("y", margin.top / 2)
            .attr("text-anchor", "middle")  
            .style("font-size", "16px") 
            .style('font-family', '"Montserrat", sans-serif')
            .text("Number of Victims by Age");

        g.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return x(d.Victim_Age); })
            .attr("width", x.bandwidth())
            .attr("y", function (d) { return y(d.Freq); })
            .attr("height", function (d) { return height - y(d.Freq); })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .attr("fill", "#69b3a2");
    }

    draw(vicAge);

})

