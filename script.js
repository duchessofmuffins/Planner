// info for the time at the top of the page
function currentTime() {
    let currentHeaderTime = moment().format("dddd, MMMM Do");
    $("#currentTime").text(currentHeaderTime);
  };

// an array outlining all the times and meridiems for the planner
var dayToDayArray = [

    {
        id: "0",
        hour: "08",
        time: "08",
        meridiem: "am",
        reminder: ""
        //8am
    },
    {
        id: "1",
        hour: "09",
        time: "09",
        meridiem: "am",
        reminder: ""
        //9am
    },
    {
        id: "2",
        hour: "10",
        time: "10",
        meridiem: "am",
        reminder: ""
        //10am
    },
    {
        id: "3",
        hour: "11",
        time: "11",
        meridiem: "am",
        reminder: ""
        //11am
    },
    {
        id: "4",
        hour: "12",
        time: "12",
        meridiem: "pm",
        reminder: ""
        //12pm
    },
    {
        id: "5",
        hour: "01",
        time: "01",
        meridiem: "pm",
        reminder: ""
        //1pm
    },
    {
        id: "6",
        hour: "02",
        time: "02",
        meridiem: "pm",
        reminder: ""
        //2pm
    },
    {
        id: "7",
        hour: "03",
        time: "03",
        meridiem: "pm",
        reminder: ""
        //3pm
    },
    {
        id: "8",
        hour: "04",
        time: "04",
        meridiem: "pm",
        reminder: ""
        //4pm
    },
    {
        id: "9",
        hour: "05",
        time: "05",
        meridiem: "pm",
        reminder: ""
        //5pm
    },
    {
        id: "10",
        hour: "06",
        time: "06",
        meridiem: "pm",
        reminder: ""
        //6pm
    },
    {
        id: "11",
        hour: "07",
        time: "07",
        meridiem: "pm",
        reminder: ""
        //7pm
    },
    {
        id: "12",
        hour: "08",
        time: "08",
        meridiem: "pm",
        reminder: ""
        //8pm
    },
];


