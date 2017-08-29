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
	var margin = 200,
		width = 1200 - margin,
	    height = 600 - margin;


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
	data = Filter(data);
	Chart.data  = data;
	var X = Chart.addCategoryAxis("x", category);
	//X.addOrderRule(category);
	Chart.addMeasureAxis("y", ["N° of passengers"]);
	Chart.addSeries(["Survived"], dimple.plot.bar);
	Chart.addLegend(65, 10, 800, 20, "right");
	Chart.draw(); 
}


