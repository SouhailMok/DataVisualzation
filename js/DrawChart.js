 "use strict";

 var Names = "";
    
function Draw(data){

 /*
  Data wrangling
  */

   // Add new attribue to sum all passengers 

    // Remove row with if "Pclass" is empty
     var cleanData = data.filter(function(d) 
   	 { 
   	 	  // Add new column to sum total passenegers bu category
          //d["N° of passengers"] = 1;

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

     // Add category for ages
     var cleanDataWithAgeCategory  = cleanData.filter(function(d) 
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
	var margin = 75,
              width = 1400 - margin,
              height = 600 - margin;


 	var title = d3.select("body")
            .append("h2")
            	.attr("style", "text-align: center;")
            	.text("Titanic survivors (With/Without cabin) by Age category ");

     var svg = d3.select("body")
            .append("svg")
              .attr("width", width + margin)
              .attr("height", height + margin)
            .append('g')
                .attr('class','chart');     

        
      
       
/*

Dimple code

*/  

	var Chart1 = new dimple.chart(svg, cleanDataWithAgeCategory);
	    Chart1.addCategoryAxis("x", ["Age category","Cabin"]); 
	    Chart1.addMeasureAxis("y", "Survived");
	    Chart1.addSeries(["Cabin"], dimple.plot.bar);
	    Chart1.addLegend(65, 10, 1200, 20, "right");
	    Chart1.draw(); 
  /* var myChart = new dimple.chart(svg, AgeCategoryData);

    var x = myChart.addCategoryAxis("x", "Sex"); 
    
    myChart.addMeasureAxis("y", "Survived");
    myChart.addSeries("Embarked", dimple.plot.bar);
    myChart.draw();    */
 
          
    /*var myChart = new dimple.chart(svg, data);

    var x = myChart.addAxis("x", "Age"); 
    x.timeInterval = 5;
    x.addOrderRule("Age");
  
    myChart.addMeasureAxis("y", "Survived");
    myChart.addSeries(null, dimple.plot.bar);
    myChart.draw(); */
	
	

    /*var Chart2 = new dimple.chart(svg, cleanDataWithAgeCategory);
	Chart2.setBounds(650, 30, 510, 330)
    Chart2.addCategoryAxis("x", ["Age category"]); 
    Chart2.addMeasureAxis("y", "Survived");
    Chart2.addSeries("Pclass", dimple.plot.bar);
   // myChart.addLegend(65, 10, 510, 20, "right");
    Chart2.draw();*/

    /*var Chart2 = new dimple.chart(svg, cleanDataWithAgeCategory);
	Chart2.setBounds(650, 30, 510, 330)
    Chart2.addCategoryAxis("x", ["Age category","Pclass"]); 
    Chart2.addMeasureAxis("y", "N° of passengers");
    Chart2.addSeries("Pclass", dimple.plot.bar);
    Chart2.addLegend(650, 10, 510, 20, "right");
    Chart2.draw();*/

    }


