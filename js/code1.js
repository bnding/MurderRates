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
        .rangeRound([height, 0]);

    /*
    * Bar Graph Drawer 
    * Function can be made modular by renaming data to [{"x":"xData", "y":"yData"}]
    * This will change it so we don't need to use d.Month but d.x instead
    */
    function draw(data) {
        x.domain(data.map(function (d) {
            return d.Perpetrator_Sex;
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
            .text("Crimes Committed by Perpetrator's Sex");

        g.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return x(d.Perpetrator_Sex); })
            .attr("width", x.bandwidth())
            .attr("y", function (d) { return y(d.Freq); })
            .attr("height", function (d) { return height - y(d.Freq); })
            .attr("fill", "#69b3a2");
    }

    draw(perpSex);

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
            return d.Perpetrator_Race;
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
            .attr("x", (width / 1.8))             
            .attr("y", margin.top / 2)
            .attr("text-anchor", "middle")  
            .style("font-size", "16px") 
            .style("text-decoration", "underline")  
            .style('font-family', '"Open Sans", sans-serif')
            .text("Crimes Committed Based on Perpetrator's Race");

        g.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return x(d.Perpetrator_Race); })
            .attr("width", x.bandwidth())
            .attr("y", function (d) { return y(d.Freq); })
            .attr("height", function (d) { return height - y(d.Freq); })
            .attr("fill", "#69b3a2");
    }

    draw(perpRace);

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
        //.domain(['5', '7', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '46', '47', '48', '49', '52', '53', '54', '55', '56', '59', '60', '64', '68', '73'])
        .rangeRound([0, width+800])
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
            return d.Perpetrator_Age;
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
            .attr("x", (width / 1.8))             
            .attr("y", margin.top / 2)
            .attr("text-anchor", "middle")  
            .style("font-size", "16px") 
            .style("text-decoration", "underline")  
            .style('font-family', '"Open Sans", sans-serif')
            .text("Murders Committed per Perpetrator's Age");

        g.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return x(d.Perpetrator_Age); })
            .attr("width", x.bandwidth())
            .attr("y", function (d) { return y(d.Freq); })
            .attr("height", function (d) { return height - y(d.Freq); })
            .attr("fill", "#69b3a2");
    }

    draw(murderPerpAge);

})