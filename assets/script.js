// display the date in the - used several options - needed to remove the text I added
let currentDay = $("#currentDay");
let m = moment();
currentDay.append(m.format(" dddd[,] LL"));

////create var/let - var stringVariable = "string"; - var numberVariable = 12;
let container = $(".container")
let dataObj = JSON.parse(localStorage.getItem("allData")) || {};
let hours = ["8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm"];
let values = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

// function

//need to loop over the time 
//(let=0; i=0 < Array.length; i++)

//moment

// local storage
    // need to store the data for each hour 
    //localStorage.setItem("the_key", "a value");
    //var valueFromLocalStorage = localStorage.getItem("the_key");

// color change
/*Hour 1.0.0+

moment().hour(Number);
moment().hour(); // Number
moment().hours(Number);
moment().hours(); // Number
Gets or sets the hour.

