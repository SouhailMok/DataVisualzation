"use strict";

var Chart = null;
var svg = null;
var category = "";



function CleanChart(){

	d3.select("g").html("");

	Chart = new dimple.chart(svg);

}

function SelectCabin(){

	category = "Cabin";
    
	CleanChart();

	 d3.csv("./data/titanic_data.csv",Draw)
}

function SelectClass(){

	category = "Pclass";

	CleanChart();

	 d3.csv("./data/titanic_data.csv",Draw);
}

function SelectSex(){

	category = "Sex";

	CleanChart();

	 d3.csv("./data/titanic_data.csv",Draw);
}

function SelectAge(){

	category = "Age category";

	CleanChart();

	 d3.csv("./data/titanic_data.csv",Draw);
}

function SelectPort(){

	category = "Embarkation port";

	CleanChart();

	 d3.csv("./data/titanic_data.csv",Draw);
}


function Init(){

	var margin = 200,
	    width = 1200 - margin,
	    height = 600 - margin;


	var Title_div = d3.select("body").append("div").attr("class","Title");

	var title1 = d3.select(".Title")
	           		  .append("h1")
	            	  .text("Titanic data visualization");
	            	
	var title2 = d3.select(".Title")
	           		  .append("h3")
	            	  .text("Comparing the number of survivors through");


	svg = d3.select("body")
	            .append("svg")
	            .attr("width", 1000)
	            .attr("height", 400)
	            .append('g');

	Chart = new dimple.chart(svg);

	category="Cabin";

}
  
function Draw(data){

	var filtered_data = [];

	// 
 	filtered_data = data.filter(function(d)
	{
   	 	d["N° of passengers"] = 1;
        return d;
            
     });

	// 
 	filtered_data = data.filter(function(d)
	{
   	 	if (d["Survived"] == "1" )
   	 		{
   	 			d["Survived"] = "Survived";
                return d; 
            }

       else {

       			d["Survived"] = "Died";
            	return d;
            }
     });
 
	// Modify Cabin attribute: to have only information about owning a cabin or not.
	 filtered_data = filtered_data.filter(function(d)
	{
   	 	if (d["Cabin"] != "" )
   	 		{
   	 			d["Cabin"] = "With cabin";
                return d; 
            }

       else {

       			d["Cabin"] = "Without cabin";
            	return d;
            }
     });

     // Add new attribute:  Age category
      filtered_data  = filtered_data.filter(function(d) 
     {

     	if (d["Age"] >= 0 &&  d["Age"] <= 14 ) 
            { 
                d["Age category"] = "Children";
                return d;
            } 

         if (d["Age"] > 14 &&  d["Age"] <= 24 ) 
            { 
                d["Age category"] = "Youth";
                 return d;
             }

        if (d["Age"] > 24 &&  d["Age"] <= 64 ) 
            { 
                d["Age category"] = "Adults";
                return d;
            } 

         if (d["Age"] > 64 ) 
            { 
                d["Age category"] = "Seniors";
                return d;
            } 
	});

     

      //

      filtered_data  = filtered_data.filter(function(d) 
     {

     	if (d["Embarked"] == "C" ) 
            { 
                d["Embarkation port"] = "Cherbourg";
                return d;
            } 

        if (d["Embarked"] == "S" ) 
            { 
                d["Embarkation port"] = "Southampton";
                return d;
            } 

         if (d["Embarked"] == "Q" ) 
            { 
                d["Embarkation port"] = "Queenstown";
                return d;
            } 

         if (d["Embarked"] == "" ) 
            { 
                d["Embarkation port"] = "Unkown";
                return d;
            } 


       
	});



		
        Chart.data  = filtered_data;
	    var X = Chart.addCategoryAxis("x", category); 
	   	X.addOrderRule(category);
	    Chart.addMeasureAxis("y", ["N° of passengers"]);
	    Chart.addSeries(["Survived"], dimple.plot.bar);
	    var Legend = Chart.addLegend(65, 10, 800, 20, "right");
	  
	    Chart.draw(); 
  

    }


