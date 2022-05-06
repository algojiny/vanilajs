const eMenus = document.querySelectorAll(".event_menu li");
const eContainer = document.querySelectorAll(".event_container>li");

eMenus.forEach(eMenu=>{eMenu.addEventListener("click",menuOn)});
function menuOn(){
    eMenus.forEach(eMenu=>{eMenu.classList.remove("on")});//on초기화
    eContainer.forEach(box=>{box.style.display="none"});//display초기화
    
    this.classList.add("on"); //선택메뉴 on효과
    
    for( var i = 0 ; i < eMenus.length; i++ ){
        if(eMenus[i].classList.contains("on")){
            eContainer[i].style.display = "block";

            finisheSet();
            announceSet();
        }
    }//eContainer change효과  
};
//종료된 이벤트
const finishedBoxs = document.querySelectorAll(".finished_box");
const finishedNumBtns = document.querySelectorAll(".finished_btn .num");

function finisheSet(){
    finishedNumBtns.forEach(numBtn=>{numBtn.classList.remove("on")});
    finishedNumBtns[0].classList.add("on");
    finishedBoxs[0].style.display="flex";
    finishedBoxs[1].style.display="none";
    finishedBoxs[2].style.display="none";
};

finishedNumBtns.forEach(numBtn=>{numBtn.addEventListener("click",finishedOn)});

function finishedOn(){
    finishedNumBtns.forEach(numBtn=>{numBtn.classList.remove("on")});
    finishedBoxs.forEach(finishedBox=>{finishedBox.style.display="none"});

    this.classList.add("on");

    for( var i = 0 ; i < finishedNumBtns.length; i++ ){
        if(finishedNumBtns[i].classList.contains("on")){
            finishedBoxs[i].style.display = "flex";
        }
    }//finishedBoxs change효과  
}

//당첨자 발표
const announceBoxs = document.querySelectorAll(".announce table");
const announceBtns = document.querySelectorAll(".announce_btn .num");

function announceSet(){
    announceBtns.forEach(numBtn=>{numBtn.classList.remove("on")});
    announceBtns[0].classList.add("on");
    announceBoxs[0].style.display="table";
    announceBoxs[1].style.display="none";
    announceBoxs[2].style.display="none";
};
announceBtns.forEach(numBtn=>{numBtn.addEventListener("click",announceOn)});

function announceOn(){
    announceBtns.forEach(numBtn=>{numBtn.classList.remove("on")});
    announceBoxs.forEach(announceBox=>{announceBox.style.display="none"});

    this.classList.add("on");

    for( var i = 0 ; i < announceBtns.length; i++ ){
        if(announceBtns[i].classList.contains("on")){
            announceBoxs[i].style.display = "table";
        }
    }//finishedBoxs change효과  
}


console.log(announceBtns);