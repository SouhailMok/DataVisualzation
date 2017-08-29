"use strict";


function Filter(data) {

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
                d["Age category"] = "Children <br/>[0 - 14]";
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
                d["Embarkation"] = "Cherbourg";
                return d;
            } 

        if (d["Embarked"] == "S" ) 
            { 
                d["Embarkation"] = "Southampton";
                return d;
            } 

         if (d["Embarked"] == "Q" ) 
            { 
                d["Embarkation"] = "Queenstown";
                return d;
            } 

         if (d["Embarked"] == "" ) 
            { 
                d["Embarkation"] = "Unkown";
                return d;
            } 

	});

      return filtered_data;

}