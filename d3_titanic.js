function draw(data)	{

    /*
        D3.js setup code
    */

    "use strict";
    var margin = 75,
    width = 1200 - margin,
    height = 600 - margin;

    /*
    d3.select("#d3")  // selects the body of the HTML document
        .append("h2") // append an h1 tag for the title
        .text("Titanic: Male/Female Survival Rate by Passenger Class"); // adds text to the h1 tag
    */

    var svg = d3.select("#d3") 
        .append("svg") // appends an svg element into the document
            .attr("width", width + margin) // adds attributes to the svg element for width and height
            .attr("height", height + margin)
        .append("g") 
            .attr("class", "chart");


/*
    Dimple.js chart
*/

    var myChart = new dimple.chart(svg, data); 
    myChart.tooolTipLabel 
    var x = myChart.addCategoryAxis("x", ["Passenger Class","Sex"]); // creates an x axis using two data frields as categories
    x.fontSize = "16px";
    x.fontFamily = "Montserrat";
    var y = myChart.addMeasureAxis("y", "Passenger Count"); // creates a y axis using passenger count as a measure
    y.fontSize = "16px";
    y.fontFamily = "Montserrat";
    var s = myChart.addSeries( "Survive" , dimple.plot.bar); // plot a bar charge with survival as a color category
    myChart.addLegend(10, 10, 455, 30, "right"); // add a legend for the color category
    myChart.assignColor("Survived", "#d6f5d6"); // assign green color for survived
    myChart.assignColor("Did Not Survive", "#ffb3b3"); // assign red color for did not survive
    y.showGridlines = false; // remove gridlines 
    myChart.draw(); 
    x.titleShape.text("Passenger Class & Gender") //change x axis title
        

}