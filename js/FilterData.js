"use strict";


function Filter(data) {

  var filtered_data = [];

  // Add new column to sum the number of passengers
 	filtered_data = data.filter(function(d)
	{
   	 	d["N° of passengers"] = 1;
        return d;
            
     });

	// Change "Survived" attribute value : 1 for "Survived"; 0 for "Died"
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
 
	// Modify Cabin attribute: to have only information about owning a cabin or not
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

     // Add new column:  Age category
      filtered_data  = filtered_data.filter(function(d) 
     {

     	if (d["Age"] >= 0 &&  d["Age"] <= 17 ) 
            { 
                d["Age category"] = "Children [0 - 17]";
                 d["Age order"] = 1;
                return d;
            } 


        if (d["Age"] > 17 &&  d["Age"] <= 60 ) 
            { 
                d["Age category"] = "Adults [18 - 60]";
                d["Age order"] = 2;
                return d;
            } 

         if (d["Age"] > 60 ) 
            { 
                d["Age category"] = "Seniors > 60";
                d["Age order"] = 3;
                return d;
            } 
	});

      // Change "Emabrked" value to its real value
      filtered_data  = filtered_data.filter(function(d) 
     {

     	if (d["Embarked"] == "C" ) 
            { 
                d["Port of embarkation"] = "Cherbourg";
                return d;
            } 

        if (d["Embarked"] == "S" ) 
            { 
                d["Port of embarkation"] = "Southampton";
                return d;
            } 

         if (d["Embarked"] == "Q" ) 
            { 
                d["Port of embarkation"] = "Queenstown";
                return d;
            } 

         if (d["Embarked"] == "" ) 
            { 
                d["Port of embarkation"] = "Unkown";
                return d;
            } 

	  });

      // Change "Pclass" to "class" for more understanding 
      filtered_data  = filtered_data.filter(function(d) 
     {

      if (d["Pclass"] == "1" ) 
            { 
                d["Class"] = "1";
                return d;
            } 

        if (d["Pclass"] == "2" ) 
            { 
                d["Class"] = "2";
                return d;
            } 

         if (d["Pclass"] == "3" ) 
            { 
                d["Class"] = "3";
                return d;
            } 

    });

      return filtered_data;

}