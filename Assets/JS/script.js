// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //saves to local storage.
  $(".saveBtn").click(function (){
    localStorage.setItem(
      $(this).parent().attr("id"),
      $(this).parent().find("textarea").val()
    );
  });

  $(".time-block").each(function () {
    //Get the time from the id
    let blockId = $(this).attr("id").split("-")[1];

    let hour = dayjs().hour() -8;

    let newClass;
    if (hour > blockId) {
      newClass = "past";
    }
    else if (hour == blockId){
      newClass = "present";
    }
    else {
      newClass = "future";
    }
    $(this).addClass(newClass);
  });
    //saves to local storage
  $(".description").each(function () {
    $(this).val(localStorage.getItem($(this).parent().attr("id")));
  });

  $("#currentDay").text(dayjs().format("dddd , MMMM D"));
});

