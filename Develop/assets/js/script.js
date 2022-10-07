// Use moment to:
// add current date on the jumbotron
// format table rows to change color depending on past, present, future

var today = moment().format("MMM Do, YYYY");

var currentHour = moment().hour();

$("#currentDay").text(today);

console.log(currentHour);


if (currentHour < 8) {
    $("#8").addClass("future");
    $("#9").addClass("future");
    $("#10").addClass("future");
    $("#11").addClass("future");
    $("#12").addClass("future");
    $("#13").addClass("future");
    $("#14").addClass("future");
    $("#15").addClass("future");
    $("#16").addClass("future");
    $("#17").addClass("future");
}
else if (currentHour > 17) {
    $("#8").addClass("past");
    $("#9").addClass("past");
    $("#10").addClass("past");
    $("#11").addClass("past");
    $("#12").addClass("past");
    $("#13").addClass("past");
    $("#14").addClass("past");
    $("#15").addClass("past");
    $("#16").addClass("past");
    $("#17").addClass("past");
}
else if (currentHour = 8) {
    $("#8").addClass("present");
    $("#9").addClass("future");
    $("#10").addClass("future");
    $("#11").addClass("future");
    $("#12").addClass("future");
    $("#13").addClass("future");
    $("#14").addClass("future");
    $("#15").addClass("future");
    $("#16").addClass("future");
    $("#17").addClass("future");
}
else if (currentHour = 9) {
    $("#8").addClass("past");
    $("#9").addClass("present");
    $("#10").addClass("future");
    $("#11").addClass("future");
    $("#12").addClass("future");
    $("#13").addClass("future");
    $("#14").addClass("future");
    $("#15").addClass("future");
    $("#16").addClass("future");
    $("#17").addClass("future");
}
else if (currentHour = 10) {
    $("#8").addClass("past");
    $("#9").addClass("past");
    $("#10").addClass("present");
    $("#11").addClass("future");
    $("#12").addClass("future");
    $("#13").addClass("future");
    $("#14").addClass("future");
    $("#15").addClass("future");
    $("#16").addClass("future");
    $("#17").addClass("future");
}
else if (currentHour = 11) {
    $("#8").addClass("past");
    $("#9").addClass("past");
    $("#10").addClass("past");
    $("#11").addClass("present");
    $("#12").addClass("future");
    $("#13").addClass("future");
    $("#14").addClass("future");
    $("#15").addClass("future");
    $("#16").addClass("future");
    $("#17").addClass("future");
}
else if (currentHour = 12) {
    $("#8").addClass("past");
    $("#9").addClass("past");
    $("#10").addClass("past");
    $("#11").addClass("past");
    $("#12").addClass("present");
    $("#13").addClass("future");
    $("#14").addClass("future");
    $("#15").addClass("future");
    $("#16").addClass("future");
    $("#17").addClass("future");
}
else if (currentHour = 13) {
    $("#8").addClass("past");
    $("#9").addClass("past");
    $("#10").addClass("past");
    $("#11").addClass("past");
    $("#12").addClass("past");
    $("#13").addClass("present");
    $("#14").addClass("future");
    $("#15").addClass("future");
    $("#16").addClass("future");
    $("#17").addClass("future");
}
else if (currentHour = 14) {
    $("#8").addClass("past");
    $("#9").addClass("past");
    $("#10").addClass("past");
    $("#11").addClass("past");
    $("#12").addClass("past");
    $("#13").addClass("past");
    $("#14").addClass("present");
    $("#15").addClass("future");
    $("#16").addClass("future");
    $("#17").addClass("future");
}
else if (currentHour = 15) {
    $("#8").addClass("past");
    $("#9").addClass("past");
    $("#10").addClass("past");
    $("#11").addClass("past");
    $("#12").addClass("past");
    $("#13").addClass("past");
    $("#14").addClass("past");
    $("#15").addClass("present");
    $("#16").addClass("future");
    $("#17").addClass("future");
}
else if (currentHour = 16) {
    $("#8").addClass("past");
    $("#9").addClass("past");
    $("#10").addClass("past");
    $("#11").addClass("past");
    $("#12").addClass("past");
    $("#13").addClass("past");
    $("#14").addClass("past");
    $("#15").addClass("past");
    $("#16").addClass("present");
    $("#17").addClass("future");
}
else if (currentHour = 17) {
    $("#8").addClass("past");
    $("#9").addClass("past");
    $("#10").addClass("past");
    $("#11").addClass("past");
    $("#12").addClass("past");
    $("#13").addClass("past");
    $("#14").addClass("past");
    $("#15").addClass("past");
    $("#16").addClass("past");
    $("#17").addClass("present");
};




var input = $("form-control");

function saveEvent() {
    var calEvent = {
        currentHour: input
    };
    localStorage.setItem("calEvent", JSON.stringify(calEvent));
};

$("btn").on('click', function(event) {
    saveEvent();
});