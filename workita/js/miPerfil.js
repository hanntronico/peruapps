$(document).ready(function () {
  $(".menu_bar").click(function (e) {
    e.preventDefaul();
    $("nav").toggle();
  });
});
