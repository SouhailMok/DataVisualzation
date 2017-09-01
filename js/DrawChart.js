"use strict";

var Chart = null;
var svg = null;
var category = "";


// On button clicked clear the previuous chart before creating the new one
function CleanChart(){

	d3.select("g").html("");

	Chart = new dimple.chart(svg);

}

// On button click set the category and re-create the corresponding chart
function SelectCategory(cat){

	category = cat;
    
	CleanChart();

	d3.csv("./data/titanic_data.csv", Draw)
}


// This function is called when the web page is rendred for the first time, 
// Used for default parameters initialization
function Init(){

	category="Cabin";
	
	var width = 1000;
	var height = 350;


	d3.select("body").append("div").attr("class","Title1")
								   .append("h2")
								   .text("Titanic data visualization");

	d3.select("body").append("div").attr("class","Title2")
								   .append("h3")
								   .attr("class", ".Title2");
	            	  
	            	
	svg = d3.select("body")
	        .append("svg")
	        .attr("width", width)
	        .attr("height", height)
	        .append('g');

	Chart = new dimple.chart(svg);
}
  
// This method create the chart: define axis, colors, legend, second title ans Summary
function Draw(data){

	d3.select(".Title2").text("Number of survived/died passengers by "+category);

	Chart.data  = Filter(data);

	Chart.addCategoryAxis("x", category);

	Chart.addMeasureAxis("y", ["N° of passengers"]);

	// Add special parameters and a summary according to the selected category
	if(category=="Class") {
		Chart.addSeries(["Survived"], dimple.plot.bar);
		Chart.defaultColors = [
		    new dimple.color("#C2E487"),
		    new dimple.color("#FB998E"),
		];

		d3.select(".Summary").html("To be among survivors, a passenger had to buy a first class ticket.<p>In 2nd and 3rd class, there are more victims than survivors.</p>");
		Chart.addLegend(65, 10, 800, 20, "right")
	}

	if(category=="Sex") {

		Chart.addSeries(["Survived"], dimple.plot.bar);
		Chart.defaultColors = [
		    new dimple.color("#C2E487"),
		    new dimple.color("#FB998E"),
		];

		d3.select(".Summary").html("Women had more chance to survive than men.<p> It seems that the priority to access emergency boats was given to women.<p>");

		Chart.addLegend(65, 10, 800, 20, "right");
	}

	if(category=="Cabin") {

		Chart.addSeries(["Survived"], dimple.plot.bar);
		Chart.defaultColors = [
		    new dimple.color("#C2E487"),
		    new dimple.color("#FB998E"),
		];

		d3.select(".Summary").html("Passengers with cabin have more chance to survive.<p>We easily deduce this by comparing the amounts in green and red bars.</p>");

		Chart.addLegend(65, 10, 800, 20, "right");
	}

	if(category=="Port of embarkation") {

		var s = Chart.addSeries(null, dimple.plot.bar);

		d3.select(".Summary").text("The majority of passengers were embarked from Southampton.");
	}

	if(category=="Age category") {

	 s = Chart.addSeries(null, dimple.plot.bar);

	 s.addOrderRule("Age order");

	 d3.select(".Summary").html("The majority of passengers are adults.<p> The graph looks like a normal distribution.</p>");
	}

	Chart.draw(); 

	var test = d3.selectAll(".dimple-axis.dimple-title")
				 .attr("style","font-family: sans-serif; font-size: 14px;font-weight: bold;")
}