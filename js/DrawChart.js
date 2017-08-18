 "use strict";

 var Names = "";
    
function PrintData(data){

 /*
  Data wrangling
  */

    // Remove row with no "emabarked" data
     var embarkedData = data.filter(function(d) 
   	 { 

            if (d["Embarked"] != "" ) 
            { 
                return d; 
            } 

           
     });

     // Add category for ages
     var AgeCategoryData  = embarkedData.filter(function(d) 
     {

     	if (d["Age"] > 0 &&  d["Age"] < 18 ) 
            { 
                d["AgeCategory"] = "Child";
                   return d;
            } 

        if (d["Age"] >= 18 &&  d["Age"] < 60 ) 
            { 
                d["AgeCategory"] = "Adult";
                   return d;
            } 

         if (d["Age"] >= 60  ) 
            { 
                d["AgeCategory"] = "Senior";
                   return d;
            } 

      

     });
 /*
  
  D3.js code

 */
	var margin = 75,
              width = 1400 - margin,
              height = 600 - margin;



     var svg = d3.select("body")
            .append("svg")
              .attr("width", width + margin)
              .attr("height", height + margin)
            .append('g')
                .attr('class','chart');     

        
      
       
/*

Dimple code

*/  
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
	var myChart = new dimple.chart(svg, AgeCategoryData);
   var x = myChart.addCategoryAxis("x", "AgeCategory"); 
    
    myChart.addMeasureAxis("y", "Survived");
    myChart.addSeries(null, dimple.plot.bar);
    myChart.draw(); 

    }


