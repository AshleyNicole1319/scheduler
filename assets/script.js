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

//define function for loading saved tasks
function loadSaved(words) {
    let savedEntry = localStorage.getItem(words);

    //this is for showing any previously saved tasks
    if (savedEntry) {
        $('#col-text-' + words).text(savedEntry);
    }
};

$(function() {
    workDay.forEach(function(element,index) {
        const hour = element.time;
        const colorBlock = timeColor(hour);

        // div for every hour
        $('.container').append(
            '<div class="row time-block" id="' + index + 
            '"><div class="col-2 hour">' + hour + 
            '</div><textarea id="col-text-' + index + 
            '" class="col-8 description ' + colorBlock + 
            '">' + element.event + 
            '</textarea><button class="col-2 btn saveBtn" type="submit"><i class="fa-regular fa-floppy-disk"></i></button></div>'
        );

        // load previously saved enteries
        loadSaved(index);
    });



    // Save option
    $('.saveBtn').on('click', function(event) {
        event.preventDefault();

        // get input text from textarea
        let entryId = parseInt($(this).closest('.time-block').attr('id'));
        let newEntry = $.trim($(this).parent().find('textarea').val());

        // set id and value into workday array
        workDay[entryId].event = newEntry;

        // save to local storage
        localStorage.setItem(entryId, newEntry);
    });

    //Change color based on time
    function timeColor(time) {
        let workTask = moment(time, "H a");
        let currentTime = moment(now, "H a");


    }

});