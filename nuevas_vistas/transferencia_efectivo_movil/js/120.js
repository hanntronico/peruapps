$(document).ready(function () {
  // Abrir el nodal al inicio cuando cargue la pantalla
  openModal();

  // Funcionalidad del stepper
  var base_color = "rgb(230,230,230)";
  var active_color = "#22BBB6";

  var base_color_rect = "rgb(230,230,230)";

  var child = 1;
  var length = $("section").length - 1;


  $("#prev").addClass("disabled");
  $("#submit").addClass("disabled");

  $("section").not("section:nth-of-type(1)").hide();
  $("section").not("section:nth-of-type(1)").css('transform', 'translateX(100px)');

  var svgWidth = length * 200 + 24;
  $("#svg_wrap").html(
    '<svg version="1.1" id="svg_form_time" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 ' +
    svgWidth +
    ' 24" xml:space="preserve"></svg>'
  );

  function makeSVG(tag, attrs) {
    var el = document.createElementNS("http://www.w3.org/2000/svg", tag);
    for (var k in attrs) el.setAttribute(k, attrs[k]);
    return el;
  }

  for (i = 0; i < length; i++) {
    var positionX = 12 + i * 200;
    var rect = makeSVG("rect", {
      x: positionX,
      y: 9,
      width: 200,
      height: 6
    });
    document.getElementById("svg_form_time").appendChild(rect);
    var circle = makeSVG("circle", {
      cx: positionX,
      cy: 12,
      r: 12,
      width: positionX,
      height: 6
    });
    document.getElementById("svg_form_time").appendChild(circle);
  }

  var circle = makeSVG("circle", {
    cx: positionX + 200,
    cy: 12,
    r: 12,
    width: positionX,
    height: 6
  });
  document.getElementById("svg_form_time").appendChild(circle);

  $('#svg_form_time rect').css('fill', base_color);
  $('#svg_form_time circle').css('fill', base_color);
  $("circle:nth-of-type(1)").css("fill", active_color);

  $("#prev").css("display", "none");
  $(".volver").css("display", "none");

  $('#inicio').css('display', 'none')
  $('#cerrar').css('display', 'none')

  $(".button").click(function () {
    $("#svg_form_time rect").css("fill", base_color_rect);
    $("#svg_form_time circle").css("fill", active_color);
    var id = $(this).attr("id");

    if (id == "next") {
      $("#prev").removeClass("disabled");
      $("#prev").css("display", "flex");
      $(".volver").css("display", "block");

      $("#efectivoMovil").css("display", "none");

      if (child >= length) {
        $(this).addClass("disabled");
        $('#submit').removeClass("disabled");

        $('div.button-box').css('display', 'inline-grid')
        $('#prev').css('display', 'none')
        $('#next').css('display', 'none')

        $('#inicio').css('display', 'block')
        $('#cerrar').css('display', 'block')
      }


      if (child <= length) {
        child++;

      }
    } else if (id == "prev") {
      $("#next").removeClass("disabled");
      $('#submit').addClass("disabled");
      if (child <= 2) {
        $(this).addClass("disabled");
      }
      if (child > 1) {
        child--;
      }
    }

    var circle_child = child + 1;

    $("#svg_form_time rect:nth-of-type(n + " + child + ")").css(
      "fill",
      base_color
    );

    $("#svg_form_time circle:nth-of-type(n + " + circle_child + ")").css(
      "fill",
      base_color
    );

    var currentSection = $("section:nth-of-type(" + child + ")");
    currentSection.fadeIn();
    currentSection.css('transform', 'translateX(0)');
    currentSection.prevAll('section').css('transform', 'translateX(-100px)');
    currentSection.nextAll('section').css('transform', 'translateX(100px)');
    $('section').not(currentSection).hide();
  });

  var circle_child = child + 1;

  $("#svg_form_time rect:nth-of-type(n + " + child + ")").css(
    "fill",
    base_color
  );

  $("#svg_form_time circle:nth-of-type(n + " + circle_child + ")").css(
    "fill",
    base_color
  );


  // MODAL

  var span = document.getElementsByClassName("close")[0];

  function openModal() {
    $("#myModal").css("display", "block");
  }

  span.onclick = function () {
    $("#myModal").css("display", "none");
  }

  window.onclick = function (event) {
    if (event.target == $("#myModal")) {
      $("#myModal").css("display", "none");
    }
  }
})