document.onreadystatechange = function () {
  var state = document.readyState;
  if (state == "complete") {
    console.log(
      "404.html",
      "color:#c3073f;font-size:30px;font-weight:800;"
    );
  }
};
$(document).ready(function () {
  $(".scroll").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      600
    );
    return false;
  });
  $(".switch").click(function () {
    $(".switch, .products").removeClass("active");
    $(this).addClass("active");
    
    if ($(this).hasClass("a")) {
      $(".products.a").addClass("active");
    } else if ($(this).hasClass("b")) {
      $(".products.b").addClass("active");
    } else if ($(this).hasClass("c")) {
      $(".products.c").addClass("active");
    } else if ($(this).hasClass("d")) {
      $(".products.d").addClass("active");
    } else if ($(this).hasClass("e")) {
      $(".products.e").addClass("active");
    } else if ($(this).hasClass("f")) {
      $(".products.f").addClass("active");
    } else if ($(this).hasClass("g")) {
      $(".products.g").addClass("active");
    } else if ($(this).hasClass("h")) {
      $(".products.h").addClass("active");
    }
  });
});