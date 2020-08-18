// from data.js
var tableData = data;

// Store data from data.js as a variable
var ufodata=data;

// Loop through the data and append the information to a table
    
ufodata.forEach(ufodata) => {
    var row = tbody.append("tr");
    Object.defineProperties(ufodata).forEach(([key,value]) => {
        var cell =row.append("td")
        cell.text(value);
    });

};

// Create a filter for the data with an Event listener

var filterbutton=d3.select("#filter-btn");
filterbutton.on("click",function(){
    var datafiltered=ufodata

    // set up filters for each column header
    var shapeinput=d3.select("#Shape").property("value").tolowercase().trim()
    var stateinput=d3.select("#State").property("value").tolowercase().trim()
    var countryinput=d3.select("#Country").property("value").tolowercase().trim()
    var dateinput=d3.select("#Date").property("value").tolowercase().trim()
    var cityinput=d3.select("#City").property("value").tolowercase().trim()

    // Input values into a dictionary
    var userdictionary = {
        city:cityinput
        date:dateinput
        country:countryinput
        state:stateinput
        shape:shapeinput
    } 

}

)};