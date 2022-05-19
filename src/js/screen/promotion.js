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
  progressIndex++;
}
// event progress //

// dragEvent //
const draggableArea = document.getElementById("draggables");
const dragCheckAnswer = document.querySelector(".dragEvent button");
const draggables = Array.from(document.querySelectorAll("#draggable"));
const droppables = Array.from(document.querySelectorAll("#droppable"));

let currentDroppable = null;

draggables.forEach(
  (item) =>
    (item.onmousedown = function (event) {
      const target = event.target;

      let shiftX = event.clientX - target.getBoundingClientRect().left;
      let shiftY = event.clientY - target.getBoundingClientRect().top;

      target.style.position = "absolute";
      target.style.zIndex = 1000;

      document.body.append(target);
      moveAt(event.pageX, event.pageY);

      function moveAt(x, y) {
        target.style.left = x - shiftX + "px";
        target.style.top = y - shiftY + "px";
      }
      target.addEventListener("mousemove", onMouseMove);

      function onMouseMove(event) {
        target.style.display = "none";
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        target.style.display = "flex";

        moveAt(event.pageX, event.pageY);
        let droppableBelow = elemBelow.closest(".droppable");
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) {
            currentDroppable.classList.remove("over");
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) {
            currentDroppable.classList.add("over");
          }
        }
        target.addEventListener("mouseup", onMouseUp);
      }

      function onMouseUp(event) {
        target.removeEventListener("mousemove", onMouseMove);
        target.onmouseup = null;

        target.style.display = "none";
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        let droppableBelow = elemBelow.closest(".droppable");
        target.style.display = "flex";

        if (droppableBelow) {
          const value = target.innerText;
          target.style.display = "none";
          droppableBelow.classList.add("complete");
          droppableBelow.innerText = value;
        } else {
          const targetIndex = Number(target.dataset.dragIndex) - 1;
          draggableArea.append(target);
          target.style.top = 0 + "px";
          switch (targetIndex) {
            case 0:
              target.style.left = 0 + "%";
              break;
            case 5:
              target.style.left = 85 + "%";
              break;
            default:
              target.style.left = targetIndex * 15 + targetIndex * 2 + "%";
          }
        }
      }
    })
);

dragCheckAnswer.addEventListener("click", checkDragAnswer);

function checkDragAnswer() {
  for (let item of droppables) {
    if (item.innerText != "") {
      if (item.innerText === item.dataset.answer) {
        continue;
      } else {
        alert("아쉽지만 다음 기회에...");
        return;
      }
    } else {
      alert("정답을 고르세요");
      return;
    }
  }
  alert("정답입니다.");
  progressIndex++;

  eventsArray.forEach((article) => {
    if (eventsArray.indexOf(article) == progressIndex) {
      article.style.display = "flex";
    } else {
      article.style.display = "none";
    }
  });
}
// dragEvent //
