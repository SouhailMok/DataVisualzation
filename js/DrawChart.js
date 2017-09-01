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



	if(category == "Age category") {// Special order in x-axis with Age category (order by age asc)

		var s = Chart.addSeries(["Age order","Survived"], dimple.plot.bar);
		s.addOrderRule("Age order");
		Chart.defaultColors = [
		    new dimple.color("#FB998E"),
		    new dimple.color("#C2E487"),
		];

	}
	else {

		Chart.addSeries(["Survived"], dimple.plot.bar);
		Chart.defaultColors = [
		    new dimple.color("#C2E487"),
		    new dimple.color("#FB998E"),
		];

	}


		// Add a summary on the chart according to the selected category
		if(category=="Class") {
			d3.select(".Summary").text(category)
		}

		if(category=="Sex") {
			d3.select(".Summary").text(category)
		}

		if(category=="Cabin") {
			d3.select(".Summary").text(category)
		}

		if(category=="Port of embarkation") {
			d3.select(".Summary").text(category)
		}

		if(category=="Age category") {
			d3.select(".Summary").text(category)
		}




	Chart.addLegend(65, 10, 800, 20, "right");

	Chart.draw(); 

	var test = d3.selectAll(".dimple-axis.dimple-title").attr("style","font-family: sans-serif; font-size: 14px;font-weight: bold;")
}