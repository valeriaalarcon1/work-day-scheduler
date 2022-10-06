// Use moment to:
// add current date on the jumbotron
// format table rows to change color depending on past, present, future

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));