$(".roadmap .box").click(function () {
  setTimeout(function () {
    $(".roadmap .box").css({
      top: "50%",
      left: "50%",
      transform: "translate(-" + 50 + "%,-" + 50 + "%)",
    });
  }, 0);
  setTimeout(function () {
    $(".roadmap .box").transition({ scale: 4 }, 500, "ease");
  }, 1500);
  setTimeout(function () {
    $(".roadmap .box").attr("src", "img/roadmap/Box_open.png");
  }, 1700);
  setTimeout(function () {
    $(".roadmap .box").attr("src", "img/roadmap/Box_open_light.png");
  }, 2000);
  setTimeout(function () {
    $(".roadmap .book").css({
      display: "block",
      opacity: "0.5",
    });
  }, 2200);
  setTimeout(function () {
    $(".roadmap .book").css({
      top: "40%",
      opacity: "1",
    });
  }, 2500);
  setTimeout(function () {
    $(".roadmap .book").css({
      transform: "translate(-" + 40 + "%,-" + 50 + "%)",
    });
    $(".roadmap .book").transition({ rotate: "15deg" }, 500, "ease");
  }, 2800);
  setTimeout(function () {
    $(".open-book").fadeIn("fast");
  }, 3300);
  setTimeout(function () {
    $(".open-book .open-text").css({ opacity: "1" });
  }, 3600);
});
