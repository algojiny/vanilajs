const eMenus = document.querySelectorAll(".event_menu li");

eMenus.forEach(eMenu=>{eMenu.addEventListener("click",menuOn)});
function menuOn(){
    eMenus.forEach(eMenu=>{eMenu.classList.remove("on")});
    this.classList.add("on");
    
    let i = 0;
    
};
console.log(target);