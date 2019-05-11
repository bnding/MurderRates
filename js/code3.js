$(document).ready(function () {
    // $("#title").append(JSON.stringify(data))

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
    
    //bandwidth() seems to do the same thing here
    //var barWidth = width/24;

    var x = d3.scaleBand()
        // .domain(["January", "February", "March", "April", "May", "June", "July", "August", "September", 
        //              "October", "November", "December"])
        .rangeRound([0, width - 250])
        .padding(0.7);

    var y = d3.scaleLinear()
        .rangeRound([height-8, 0]);

    /*
    * Bar Graph Drawer 
    * Function can be made modular by renaming data to [{"x":"xData", "y":"yData"}]
    * This will change it so we don't need to use d.Month but d.x instead
    */
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

        // text label for the x axis
        // svg.append("text")             
        //     .attr("transform",
        //         "translate(" + (width/2 + 15) + " ," + 
        //                     (height + margin.top + 36) + ")")
        //     .attr("text-anchor", "top")
        //     .text("Month");

        g.append("g")
            .call(d3.axisLeft(y));
            // .append("text")
            // .attr("fill", "#000")
            // .attr("transform", "rotate(-90)")
            // .attr("y", 6)
            // .attr("dy", "0.71em")
            // .attr("text-anchor", "end")
            // .text("Frequency");

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
            .style("text-decoration", "underline")  
            .style('font-family', '"Open Sans", sans-serif')
            .text("Number of Victims by Sex");

        g.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return x(d.Victim_Sex); })
            .attr("width", x.bandwidth())
            .attr("y", function (d) { return y(d.Freq); })
            .attr("height", function (d) { return height - y(d.Freq); })
            .attr("fill", "#69b3a2");
    }

    draw(victSex);

})

$(document).ready(function () {
    // $("#title").append(JSON.stringify(data))

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
    
    //bandwidth() seems to do the same thing here
    //var barWidth = width/24;

    var x = d3.scaleBand()
        // .domain(["January", "February", "March", "April", "May", "June", "July", "August", "September", 
        //              "October", "November", "December"])
        .rangeRound([0, width-100])
        .padding(0.6);

    var y = d3.scaleLinear()
        .rangeRound([height, 0]);

    /*
    * Bar Graph Drawer 
    * Function can be made modular by renaming data to [{"x":"xData", "y":"yData"}]
    * This will change it so we don't need to use d.Month but d.x instead
    */
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

        // text label for the x axis
        // svg.append("text")             
        //     .attr("transform",
        //         "translate(" + (width/2 + 15) + " ," + 
        //                     (height + margin.top + 36) + ")")
        //     .attr("text-anchor", "top")
        //     .text("Month");

        g.append("g")
            .call(d3.axisLeft(y));
            // .append("text")
            // .attr("fill", "#000")
            // .attr("transform", "rotate(-90)")
            // .attr("y", 6)
            // .attr("dy", "0.71em")
            // .attr("text-anchor", "end")
            // .text("Frequency");

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
            .style("text-decoration", "underline")  
            .style('font-family', '"Open Sans", sans-serif')
            .text("Number of Victims by Race");

        g.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return x(d.Victim_Race); })
            .attr("width", x.bandwidth())
            .attr("y", function (d) { return y(d.Freq); })
            .attr("height", function (d) { return height - y(d.Freq); })
            .attr("fill", "#69b3a2");
    }

    draw(victRace);

})

$(document).ready(function () {
    // $("#title").append(JSON.stringify(data))

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
    
    //bandwidth() seems to do the same thing here
    //var barWidth = width/24;

    var x = d3.scaleBand()
        .rangeRound([0, width+800])
        .padding(0.2);

    var y = d3.scaleLinear()
        .rangeRound([height, 0]);

    /*
    * Bar Graph Drawer 
    * Function can be made modular by renaming data to [{"x":"xData", "y":"yData"}]
    * This will change it so we don't need to use d.Month but d.x instead
    */
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

        // text label for the x axis
        // svg.append("text")             
        //     .attr("transform",
        //         "translate(" + (width/2 + 15) + " ," + 
        //                     (height + margin.top + 36) + ")")
        //     .attr("text-anchor", "top")
        //     .text("Month");

        g.append("g")
            .call(d3.axisLeft(y));
            // .append("text")
            // .attr("fill", "#000")
            // .attr("transform", "rotate(-90)")
            // .attr("y", 6)
            // .attr("dy", "0.71em")
            // .attr("text-anchor", "end")
            // .text("Frequency");

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
            .attr("y", margin.top / 2)
            .attr("text-anchor", "middle")  
            .style("font-size", "16px") 
            .style("text-decoration", "underline")  
            .style('font-family', '"Open Sans", sans-serif')
            .text("Number of Victims by Age");

        g.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return x(d.Victim_Age); })
            .attr("width", 10)
            .attr("y", function (d) { return y(d.Freq); })
            .attr("height", function (d) { return height - y(d.Freq); })
            .attr("fill", "#69b3a2");
    }

    draw(vicAge);

})

