// from data.js
var tableData = data;

// Store data from data.js as a variable
var ufos=data;

// Loop through the data and append the information to a table

var tbody = d3.select("tbody")

ufos.forEach((ufodata) => {
    var row = tbody.append("tr");
// Print out the data so that you can see the loop in the console
    console.log(ufodata)
    Object.values(ufodata).forEach((value) => {
        var cell =row.append("td")
        cell.text(value);
    });

});

// Create a filter for the data with an Event listener

var filterbutton=d3.select("#filter-btn");
filterbutton.on("click",function(){
    var datafiltered=ufos

    // set up filters for each column header
    var shapeinput=d3.select("#Shape").property("value").tolowercase().trim()
    var stateinput=d3.select("#State").property("value").tolowercase().trim()
    var countryinput=d3.select("#Country").property("value").tolowercase().trim()
    var dateinput=d3.select("#Date").property("value").tolowercase().trim()
    var cityinput=d3.select("#City").property("value").tolowercase().trim()

    // Input values into a dictionary
    var userdictionary = {
        city:cityinput,
        datetime:dateinput,
        country:countryinput,
        state:stateinput,
        shape:shapeinput
    } 


Object.entries(userdictionary).forEach(([key,value]) => {
    if (value === ""){
        delete userdictionary[key]
    }
});

console.log(userdictionary);
    console.log("Filter button was clicked")
    console.log("inputvalue :",userdictionary)

    datafiltered = datafiltered.filter(row => {
        return Object.entries(dictUser).every(criteria => {
          const key = criteria[0]
          const value = criteria[1]
          return row[key] === value
        })
      })
      
      var tableContent=d3.select("tbody");
  
      //Empty table content before displaying new one 
      tableContent.html("");
  
      datafiltered.forEach((fData) => {
        var row = tbody.append("tr");
        Object.entries(fData).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
    

        });
    });


}

);