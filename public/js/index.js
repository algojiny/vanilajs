(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var n=r.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t+"../"})();var t=document.querySelector("header"),r=document.querySelector(".header_inner"),n=document.querySelector("header nav"),o=document.querySelector(".header_bg"),s=document.querySelector(".loginState");null==n||n.addEventListener("mouseover",(function(){o.style="transform: translateY(0%);",r.classList.add("on")})),null==n||n.addEventListener("mouseleave",(function(){o.style="transform: translateY(-100%);",r.classList.remove("on")})),window.addEventListener("scroll",(function(e){this.window.scrollY,this.scrollY>150?t.style="display: none;":t.style="display: flex;"})),localStorage.getItem("checkInUser")?(JSON.parse(localStorage.getItem("checkInUser")),s.href="./home.html",s.innerHTML='<i class="fa-solid fa-user"></i>'):(s.setAttribute("href","./login.html"),s.innerHTML="<span>로그인</span>"),e.p,e.p,e.p,e.p,e.p,e.p,e.p})();