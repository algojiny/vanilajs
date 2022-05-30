const eMenus = document.querySelectorAll(".event_menu li");
const eContainer = document.querySelectorAll(".event_container>li");

eMenus.forEach((eMenu) => {
  eMenu.addEventListener("click", menuOn);
});
function menuOn() {
  eMenus.forEach((eMenu) => {
    eMenu.classList.remove("on");
  }); //on초기화
  eContainer.forEach((box) => {
    box.style.display = "none";
  }); //display초기화

  this.classList.add("on"); //선택메뉴 on효과

  for (var i = 0; i < eMenus.length; i++) {
    if (eMenus[i].classList.contains("on")) {
      eContainer[i].style.display = "block";

      finisheSet();
      announceSet();
    }
  } //eContainer change효과
}

//종료된 이벤트
const finishedBoxs = document.querySelectorAll(".finished_box");
const finishedNumBtns = document.querySelectorAll(".finished_btn .num");
// var fBtns = Array.from(finishedNumBtns);
// var fBoxs = Array.from(finishedBoxs);

function pageOn() {
  if (eMenus[1].classList.contains("on")) {
    for (var i = 0; i < finishedNumBtns.length; i++) {
      if (finishedNumBtns[i].classList.contains("on")) {
        finishedBoxs.forEach((finishedBox) => {
          finishedBox.style.display = "none";
        });
        finishedBoxs[i].style.display = "flex";
      }
    }
  }
  if (eMenus[2].classList.contains("on")) {
    for (var i = 0; i < announceBtns.length; i++) {
      if (announceBtns[i].classList.contains("on")) {
        announceBoxs.forEach((announceBox) => {
          announceBox.style.display = "none";
        });
        announceBoxs[i].style.display = "table";
      }
    }
  }
}

function finisheSet() {
  finishedNumBtns.forEach((numBtn) => {
    numBtn.classList.remove("on");
  });
  finishedNumBtns[0].classList.add("on");
  // finishedBoxs[0].style.display="flex";
  // finishedBoxs[1].style.display="none";
  // finishedBoxs[2].style.display="none";
  pageOn();
}

finishedNumBtns.forEach((numBtn) => {
  numBtn.addEventListener("click", finishedOn);
});

function finishedOn() {
  finishedNumBtns.forEach((numBtn) => {
    numBtn.classList.remove("on");
  });
  finishedBoxs.forEach((finishedBox) => {
    finishedBox.style.display = "none";
  });

  this.classList.add("on");
  pageOn();
  // console.log(Btns,Boxs);

  // for( var i = 0 ; i < finishedNumBtns.length; i++ ){
  //     if(finishedNumBtns[i].classList.contains("on")){
  //         finishedBoxs[i].style.display = "flex";
  //     }
  // }//finishedBoxs change효과

}

const preBtns = document.querySelectorAll(".pre");
const nextBtns = document.querySelectorAll(".next");


preBtns.forEach((btn)=>{btn.addEventListener("click", prePage)});
nextBtns.forEach((btn)=>{btn.addEventListener("click", nextPage)});

function prePage() {
  if(eMenus[1].classList.contains("on")){
    for (var i = 1; i < finishedBoxs.length; i++) {
      if (finishedNumBtns[i].classList.contains("on")) {
        finishedNumBtns.forEach((numBtn) => {
          numBtn.classList.remove("on");
        });
        finishedBoxs.forEach((finishedBox) => {
          finishedBox.style.display = "none";
        });

        finishedNumBtns[i - 1].classList.add("on");
        // finishedBoxs[i-1].style.display = "flex";
        pageOn();
      }
    }
  }if(eMenus[2].classList.contains("on")){
    for (var i = 1; i < announceBoxs.length; i++) {
      if (announceBtns[i].classList.contains("on")) {
        announceBtns.forEach((Btn) => {
          Btn.classList.remove("on");
        });
        announceBoxs.forEach((announceBox) => {
          announceBox.style.display = "none";
        });

        announceBtns[i - 1].classList.add("on");
        // announceBoxs[i-1].style.display = "flex";
        pageOn();
      }
    }
  }
}

function nextPage() {
  if(eMenus[1].classList.contains("on")){
    for (var i = 0; i < finishedBoxs.length - 1; i++) {
      if (finishedNumBtns[i].classList.contains("on")) {
        finishedNumBtns.forEach((numBtn) => {
          numBtn.classList.remove("on");
        });
        finishedBoxs.forEach((finishedBox) => {
          finishedBox.style.display = "none";
        });

        i += 1;
        finishedNumBtns[i].classList.add("on");
        // finishedBoxs[i].style.display = "flex";
        pageOn();
      }
    }
  }if(eMenus[2].classList.contains("on")){
    for (var i = 0; i < announceBoxs.length - 1; i++) {
      if (announceBtns[i].classList.contains("on")) {
        announceBtns.forEach((Btn) => {
          Btn.classList.remove("on");
        });
        announceBoxs.forEach((announceBox) => {
          announceBox.style.display = "none";
        });

        i += 1;
        announceBtns[i].classList.add("on");
        // announceBoxs[i].style.display = "flex";
        pageOn();
      }
    }
  }
}

//당첨자 발표
const announceBoxs = document.querySelectorAll(".announce table");
const announceBtns = document.querySelectorAll(".announce_btn .num");

function announceSet() {
  announceBtns.forEach((numBtn) => {
    numBtn.classList.remove("on");
  });
  announceBtns[0].classList.add("on");
  // announceBoxs[0].style.display="table";
  // announceBoxs[1].style.display="none";
  // announceBoxs[2].style.display="none";
  pageOn();
}
announceBtns.forEach((numBtn) => {
  numBtn.addEventListener("click", announceOn);
});

function announceOn() {
  announceBtns.forEach((numBtn) => {
    numBtn.classList.remove("on");
  });
  announceBoxs.forEach((announceBox) => {
    announceBox.style.display = "none";
  });

  this.classList.add("on");

  // for( var i = 0 ; i < announceBtns.length; i++ ){
  //     if(announceBtns[i].classList.contains("on")){
  //         announceBoxs[i].style.display = "table";
  //     }
  // }//finishedBoxs change효과
  pageOn();
}

// console.log(announceBtns);
//당첨자 발표 데이타
// const winners = [
//   {
//     id : 1,
//     title : '1월의 이벤트 당첨자',
//     date : '2021-01-30',
//     hits : 85
//   },
//   {
//     id : 2,
//     title : '2월의 이벤트 당첨자',
//     date : '2021-02-20',
//     hits : 85
//   },
//   {
//     id : 3,
//     title : '3월의 이벤트 당첨자',
//     date : '2021-03-30',
//     hits : 85
//   },
//   {
//     id : 4,
//     title : '4월의 이벤트 당첨자',
//     date : '2021-04-30',
//     hits : 85
//   },
//   {
//     id : 5,
//     title : '5월의 이벤트 당첨자',
//     date : '2021-05-30',
//     hits : 85
//   }
// ]
// console.log(winners);

// const list = document.getElementById(list);

// function showList(val){
//   list.innerHTML='';
//   const res = winners.forEach(winner=>{
//     if(winner.title.includes(val)){
//       const tr = document.createElement("tr");
//       tr.innerHTML= '<td> ${winner.id} </td> <td> ${winner.title} </td><td> ${winner.date} </td> <td> ${winner.hits} </td>';
//       list.appendChild(tr);
//     }
//   })
// }
// showList('');