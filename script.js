
$(document).ready(function(){

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));


$(".saveBtn").on("click", function (){
    var note = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    //console.log (note, time);
    localStorage.setItem(time, note);
});


function update() {
    var currentHour = moment().hours();
    $(".time-block").each(function(){
        var blockHour = parseInt($(this).attr("id"));
        if (blockHour < currentHour) {
            $(this).addClass("past");
        }else if(blockHour === currentHour){
            $(this).addClass("present");
            $(this).removeClass("past");
        }
        else if(blockHour > currentHour) {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }

        })
}

update();


$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("1"));
$("#14 .description").val(localStorage.getItem("2"));
$("#15 .description").val(localStorage.getItem("3"));
$("#16 .description").val(localStorage.getItem("4"));
$("#17 .description").val(localStorage.getItem("5"));

});