(()=>{function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var t=document.querySelector(".show_2"),r=document.querySelector(".show_3");window.addEventListener("scroll",(function(e){window.scrollY>200&&t.classList.add("on"),window.scrollY>800&&r.classList.add("on")}));var n=document.querySelectorAll(".eventBox > div");Array.from(n),document.querySelector(".playBtn").addEventListener("click",(function(){var t,r=function(t,r){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(t))||r&&t&&"number"==typeof t.length){n&&(t=n);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,c=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw c}}}}(n);try{for(r.s();!(t=r.n()).done;){var o=t.value;o.classList.contains("dragEvent")?o.classList.add("on"):o.classList.remove("on")}}catch(e){r.e(e)}finally{r.f()}}));var o=document.querySelectorAll(".draggable"),a=document.querySelectorAll(".droppable"),c=document.querySelector(".dropZon");function i(e){e.target}function l(e){e.preventDefault(),console.log(e)}function u(e){e.target.classList.add("over"),e.target.addEventListener("drop",l,!0)}function d(e){e.target.classList.remove("over"),e.target.removeEventListener("drop",l,!0)}o.forEach((function(e){return e.addEventListener("dragstart",i)})),a.forEach((function(e){return e.addEventListener("dragover",u)})),a.forEach((function(e){return e.addEventListener("dragleave",d)})),c.addEventListener("drop",l)})();