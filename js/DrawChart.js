"use strict";
  
function Draw(data){

	// Modify Cabin attribute: to have only information about owning a cabin or not.
	var CabinData = data.filter(function(d)
	{
   	 	if (d["Cabin"] != "" )
   	 		{
   	 			d["Cabin"] = "Have cabin";
                return d; 
            }

       else {

       			d["Cabin"] = "No cabin";
            	return d;
            }
     });

     // Add new attribute:  Age category
     var DataWithAgeCategory  = CabinData.filter(function(d) 
     {

     	if (d["Age"] > 0 &&  d["Age"] <= 14 ) 
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


 /*
  
  D3.js code

 */
	var margin = 200,
              width = 1200 - margin,
              height = 600 - margin;


 	var title = d3.select("body")
           		  .append("h2")
            	  .text("Titanic survivors by age category of passengers - with/without cabin");

    var svg = d3.select("body")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .append('g')
                .attr('class','chart'); 
/*

Dimple code

*/  

	var Chart1 = new dimple.chart(svg, DataWithAgeCategory);
	    Chart1.addCategoryAxis("x", ["Age category","Cabin"]); 
	    Chart1.addMeasureAxis("y", "Survived");
	    Chart1.addSeries(["Cabin"], dimple.plot.bar);
	    Chart1.addLegend(65, 10, 1200, 20, "right");
	    Chart1.draw(); 
  

    }


