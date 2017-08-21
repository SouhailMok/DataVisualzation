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

            if (d["Pclass"] != "" ) 
            { 
                return d; 
            } 

           
     });

     // Add category for ages
     var cleanDataWithAgeCategory  = cleanData.filter(function(d) 
     {

     	if (d["Age"] > 0 &&  d["Age"] < 18 ) 
            { 
                d["Age category"] = "Child";
                d["N° of passengers"] = 1;
                   return d;
            } 

        if (d["Age"] >= 18 &&  d["Age"] < 60 ) 
            { 
                d["Age category"] = "Adult";
                d["N° of passengers"] = 1;
                   return d;
            } 

         if (d["Age"] >= 60  ) 
            { 
                d["Age category"] = "Senior";
                d["N° of passengers"] = 1;
                   return d;
            } 

      // Add new attribue to sum all passengers 



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
	
	var Chart1 = new dimple.chart(svg, cleanDataWithAgeCategory);
	Chart1.setBounds(60, 30, 510, 330)
    Chart1.addCategoryAxis("x", ["Age category","Pclass"]); 
    Chart1.addMeasureAxis("y", "Survived");
    Chart1.addSeries("Pclass", dimple.plot.bar);
    Chart1.addLegend(65, 10, 510, 20, "right");
    Chart1.draw(); 

    /*var Chart2 = new dimple.chart(svg, cleanDataWithAgeCategory);
	Chart2.setBounds(650, 30, 510, 330)
    Chart2.addCategoryAxis("x", ["Age category"]); 
    Chart2.addMeasureAxis("y", "Survived");
    Chart2.addSeries("Pclass", dimple.plot.bar);
   // myChart.addLegend(65, 10, 510, 20, "right");
    Chart2.draw();*/

    var Chart2 = new dimple.chart(svg, cleanDataWithAgeCategory);
	Chart2.setBounds(650, 30, 510, 330)
    Chart2.addCategoryAxis("x", ["Age category","Pclass"]); 
    Chart2.addMeasureAxis("y", "N° of passengers");
    Chart2.addSeries("Pclass", dimple.plot.bar);
   // myChart.addLegend(65, 10, 510, 20, "right");
    Chart2.draw();

    }


