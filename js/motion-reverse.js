$(function () {
  // reverse
  $(".book-close").click(function () {
    setTimeout(function () {
      $(".open-text").css({ opacity: "0" });
    }, 0);
    setTimeout(function () {
      $(".open-book").fadeOut("fast");
    }, 1000);
    //   Open Book
    setTimeout(function () {
      $(".roadmap .book").transition({ rotate: "-15deg" }, 500, "ease");
    }, 1500);
    setTimeout(function () {
      $(".roadmap .book").css({ top: "50%", opacity: "0.5" });
    }, 2000);
    setTimeout(function () {
      $(".roadmap .book").css({ opacity: "0" });
    }, 2300);
    //   book
    setTimeout(function () {
      $(".roadmap .box").attr("src", "img/roadmap/Box_open.png");
    }, 3300);
    setTimeout(function () {
      $(".roadmap .box").attr("src", "img/roadmap/Box_close.png");
    }, 3500);
    //   Box
    setTimeout(function () {
      $(".roadmap .box").transition({ scale: 1 }, 500, "ease");
    }, 4000);
    setTimeout(function () {
      $(".roadmap .box").css({
        top: "7%",
        left: "90%",
        transform: "translate(-" + 50 + "%,-" + 50 + "%)",
      });
    }, 5000);
  });
});
