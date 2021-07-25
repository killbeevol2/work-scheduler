const now = parseInt(moment().format("HH"));
const date = moment().format("dddd, MMMM Do");

let schedule = [];
const getSchedule = () => {
  const newSchedule = [];
  $("textarea").each(function (i) {
    const hour = parseInt($(this).attr("id"));
    const note = $(this).val();
    newSchedule.push({
      hour: hour,
      note: note,
    });
  });
};

$("#currentDay").text(date);
$("textarea").each(function (i) {
  const hour = parseInt($(this).attr("id"));
  if (hour > now) {
    $(this).addClass("future");
  } else if (hour < now) {
    $(this).addClass("past");
  } else {
    $(this).addClass("present");
  }
});
