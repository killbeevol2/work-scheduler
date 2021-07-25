const now = parseInt(moment().format("HH"));
const date = moment().format("dddd, MMMM Do");

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
  schedule = [...newSchedule];
};

const saveSchedule = () => {
  console.log("it ran");
  getSchedule();
  localStorage.setItem("workSchedule", JSON.stringify(schedule));
};

const setSchedule = () => {
  schedule.forEach((block) => {
    $(`#${block.hour}`).val(block.note);
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

$(".saveBtn").on("click", saveSchedule);

let schedule = localStorage.getItem("workSchedule") || [];
if (schedule.length > 0) {
  schedule = JSON.parse(schedule);
  setSchedule();
}
