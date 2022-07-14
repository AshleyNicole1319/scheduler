// Current Day
const currentDay = moment().format('LLLL');
const now = moment().format('LT');

$('#currentDay').text(currentDay);

// Arrays for each hour
let workDay = [
    { time: "6:00 AM", event: ""},
    { time: "7:00 AM", event: ""},
    { time: "8:00 AM", event: ""},
    { time: "9:00 AM", event: ""},
    { time: "10:00 AM", event: ""},
    { time: "11:00 AM", event: ""},
    { time: "12:00 PM", event: ""},
    { time: "1:00 PM", event: ""},
    { time: "2:00 PM", event: ""},
    { time: "3:00 PM", event: ""},
    { time: "4:00 PM", event: ""},
    { time: "5:00 PM", event: ""},
    { time: "6:00 PM", event: ""},
    { time: "7:00 PM", event: ""},
    { time: "8:00 PM", event: ""},
];

