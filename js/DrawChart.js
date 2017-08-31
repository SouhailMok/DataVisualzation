"use strict";

var Chart = null;
var svg = null;
var category = "";



function CleanChart(){

	d3.select("g").html("");

	Chart = new dimple.chart(svg);

}

function SelectCategory(cat){

	category = cat;
    
	CleanChart();

	d3.csv("./data/titanic_data.csv",Draw)
}


function Init(){
	
	var width = 1000;
	var height = 600;


	var Title_div = d3.select("body").append("div").attr("class","Title");

	var title= d3.select(".Title")
	           		  .append("h1")
	            	  .text("Titanic data visualization");
	            	
	svg = d3.select("body")
	        .append("svg")
	        .attr("width", 1000)
	        .attr("height", 400)
	        .append('g');

	Chart = new dimple.chart(svg);

	category="Cabin";

}
  
function Draw(data){


	Chart.data  = Filter(data);

	Chart.addCategoryAxis("x", category);



	Chart.addMeasureAxis("y", ["N° of passengers"]);

	if(category == "Age category") {

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



	Chart.addLegend(65, 10, 800, 20, "right");

	Chart.draw(); 

	var test = d3.selectAll(".dimple-axis.dimple-title").attr("style","font-family: sans-serif; font-size: 14px;font-weight: bold;")
}