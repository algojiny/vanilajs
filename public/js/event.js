(() => {
  var n = document.querySelectorAll(".event_menu li"),
    e = document.querySelectorAll(".event_container>li");
  function s() {
    n.forEach(function (n) {
      n.classList.remove("on");
    }),
      e.forEach(function (n) {
        n.style.display = "none";
      }),
      this.classList.add("on");
    for (var s = 0; s < n.length; s++)
      n[s].classList.contains("on") &&
        ((e[s].style.display = "block"),
        t.forEach(function (n) {
          n.classList.remove("on");
        }),
        t[0].classList.add("on"),
        (o[0].style.display = "flex"),
        (o[1].style.display = "none"),
        (o[2].style.display = "none"),
        r.forEach(function (n) {
          n.classList.remove("on");
        }),
        r[0].classList.add("on"),
        (i[0].style.display = "table"),
        (i[1].style.display = "none"),
        (i[2].style.display = "none"));
  }
  n.forEach(function (n) {
    n.addEventListener("click", s);
  });
  var o = document.querySelectorAll(".finished_box"),
    t = document.querySelectorAll(".finished_btn .num");
  function l() {
    t.forEach(function (n) {
      n.classList.remove("on");
    }),
      o.forEach(function (n) {
        n.style.display = "none";
      }),
      this.classList.add("on");
    for (var n = 0; n < t.length; n++)
      t[n].classList.contains("on") && (o[n].style.display = "flex");
  }
  t.forEach(function (n) {
    n.addEventListener("click", l);
  });
  var c = document.querySelector(".pre"),
    a = document.querySelector(".next");
  c.addEventListener("click", function () {
    for (var n = 1; n < o.length; n++)
      t[n].classList.contains("on") &&
        (t.forEach(function (n) {
          n.classList.remove("on");
        }),
        o.forEach(function (n) {
          n.style.display = "none";
        }),
        t[n - 1].classList.add("on"),
        (o[n - 1].style.display = "flex"));
  }),
    a.addEventListener("click", function () {
      for (var n = 0; n < o.length - 1; n++)
        t[n].classList.contains("on") &&
          (t.forEach(function (n) {
            n.classList.remove("on");
          }),
          o.forEach(function (n) {
            n.style.display = "none";
          }),
          t[(n += 1)].classList.add("on"),
          (o[n].style.display = "flex"));
    });
  var i = document.querySelectorAll(".announce table"),
    r = document.querySelectorAll(".announce_btn .num");
  function d() {
    r.forEach(function (n) {
      n.classList.remove("on");
    }),
      i.forEach(function (n) {
        n.style.display = "none";
      }),
      this.classList.add("on");
    for (var n = 0; n < r.length; n++)
      r[n].classList.contains("on") && (i[n].style.display = "table");
  }
  r.forEach(function (n) {
    n.addEventListener("click", d);
  }),
    console.log(r);
})();
