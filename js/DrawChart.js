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
	var height = 450;


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

// Make custom series according to selected category
function AddCustomSeries(title, defaultColors, category,isLegend,  order){

		d3.select(".Title2").text(title);
		var s = Chart.addSeries(category, dimple.plot.bar);
		if(isLegend) {
			Chart.defaultColors = defaultColors;
			Chart.addLegend(65, 10, 800, 20, "right");
		}

		if(order != "") s.addOrderRule(order);

}

// Add summary below the chart for conclusions
function AddSummary(summary){
	d3.select(".Summary").html(summary);
}
  
// This method create the chart: define axis, colors, legend, second title ans Summary
function Draw(data){
	Chart.data  = Filter(data);

	Chart.addCategoryAxis("x", category);

	Chart.addMeasureAxis("y", ["N° of passengers"]);

	// Add special parameters and a summary according to the selected category
	if(category=="Class") {
		AddCustomSeries("Number of survived/died passengers by Class", 
						[new dimple.color("#C2E487"),new dimple.color("#FB998E")], 
						["Survived"],
						true,
						"");
		AddSummary("To be among survivors, a passenger had to buy a first class ticket.<p>In 2nd and 3rd class, there are more victims than survivors.</p>");
	}

	if(category=="Sex") {

		AddCustomSeries("Number of survived/died passengers by Sex", 
						[new dimple.color("#C2E487"),new dimple.color("#FB998E")], 
						["Survived"],
						true,
						"");
		AddSummary("Women had more chance to survive than men.<p> It seems that the priority to access emergency boats was given to women.</p>");
	

		
	}

	if(category=="Cabin") {

		AddCustomSeries("Number of survived/died passengers by Cabin", 
						[new dimple.color("#C2E487"),new dimple.color("#FB998E")], 
						["Survived"],
						true,
						"");

		AddSummary("Passengers with cabin have more chance to survive.<p>We easily deduce this by comparing the amounts in green and red bars.</p>");
	}

	if(category=="Port of embarkation") {

		AddCustomSeries("Number of passengers by Port of embarkation", 
						[], 
						null,
						false,
						"");

		AddSummary("The majority of passengers were embarked from Southampton.");
	}

	if(category=="Age category") {

		AddCustomSeries("Number of passengers by Age category", 
						[], 
						null,
						false,
						"Age order");

		AddSummary("The majority of passengers are adults.<p> The graph looks like a normal distribution.</p>");

	}

	if(category=="Age") {

	AddCustomSeries("Distribution of passengers ages", 
						[], 
						null,
						false,
						"Age");

	AddSummary("This bar chart representation we could see a normal distribution of ages");

	}

	Chart.draw(); 

	// Make axes titles with font-weight bold for easy reading
	d3.selectAll(".dimple-axis.dimple-title")
	  .attr("style","font-family: sans-serif; font-size: 14px;font-weight: bold;")
}