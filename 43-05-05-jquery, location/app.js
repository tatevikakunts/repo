$("p").addClass("first second anyClass");

$("#hideText").click(function (event) {
  event.preventDefault();
  $("p").hide("slow");
});

$("#showText").click(function (event) {
  event.preventDefault();
  $("p").show("slow");
});

$("#toggleText").click(function (event) {
  event.preventDefault();
  $("p").toggle("slow");
});

$("#fadeImg").click((event) => {
  $("p img").fadeOut("slow");
  setTimeout(() => {
    $("p img").fadeIn("slow");
  }, 3000);
});

$("#fadeImgToggle").click((event) => {
  $("p img").fadeToggle("slow");
});
