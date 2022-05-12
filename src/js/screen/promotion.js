// showing banner
const show2 = document.querySelector(".show_2");
const show3 = document.querySelector(".show_3");

window.addEventListener("scroll", scrolling);

function scrolling(event) {
  if (window.scrollY > 200) {
    show2.classList.add("on");
  }
  if (window.scrollY > 800) {
    show3.classList.add("on");
  }
}
// showing banner

// event progress //
const events = document.querySelectorAll(".eventBox > div");
const eventsArray = Array.from(events);
const playBtn = document.querySelector(".playBtn");
let progressIndex = 0;

playBtn.addEventListener("click", startEventGame);

function startEventGame() {
  for (let item of events) {
    if (item.classList.contains("dragEvent")) {
      item.classList.add("on");
    } else {
      item.classList.remove("on");
    }
  }
}
// event progress //

// dragEvent //
const draggables = document.querySelectorAll(".draggable");
const droppables = document.querySelectorAll(".droppable");
const dropZon = document.querySelector(".dropZon");
let draggingObj = null;

draggables.forEach((obj) => obj.addEventListener("dragstart", dragStart));

droppables.forEach((obj) => obj.addEventListener("dragover", dragOver));
droppables.forEach((obj) => obj.addEventListener("dragleave", dragLeave));
dropZon.addEventListener("drop", handleDrop);

function dragStart(event) {
  draggingObj = event.target;
}
function handleDrop(event) {
  event.preventDefault();
  console.log(event);
}

function dragOver(event) {
  event.target.classList.add("over");
  event.target.addEventListener("drop", handleDrop, true);
}
function dragLeave(event) {
  event.target.classList.remove("over");
  event.target.removeEventListener("drop", handleDrop, true);
}
// dragEvent //
