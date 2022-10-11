// $(window).on('load resize', function(){
$(".modal_open").click(function () {
  $(".modal_back").show();
  $(".modal").slideDown();
  $(".modal_back").show();
  $(".modal").slideDown();
  $("body").css({ position: "sticky", overflow: "hidden" });
});
$(".modal_logo>img, .modal_logo>i, .modal_back").click(function () {
  $(".modal").slideUp("fast");
  $(".modal_back").hide();
  $(".modal").slideUp("fast");
  $(".modal_back").hide();
  $("body").css({ position: "static", overflow: "auto" });
});
// modal2_open,close
$(".hamburger").click(function () {
  if ($(window).width() < 767) {
    $(".modal_back2").show();
    $(".modal2").animate(
      {
        right: "0",
      },
      400
    );
  } else {
    $(".modal_back2").show();
    $(".modal2").animate(
      {
        right: "0",
      },
      400
    );
  }
});
$(".modal2_close i").click(function () {
  $(".modal_back2").hide();
  $(".modal2").animate(
    {
      right: "-100%",
    },
    400
  );
});
// modal img_change
$(".modal_li>ul>li:nth-of-type(1)").mouseover(function () {
  $(".img_box img").attr("src", "./image/billie.jpg");
});
$(".modal_li>ul>li:nth-of-type(2)").mouseover(function () {
  $(".img_box img").attr("src", "./image/drake.jpg");
});
$(".modal_li>ul>li:nth-of-type(3)").mouseover(function () {
  $(".img_box img").attr("src", "./image/newhope.jpg");
});
$(".modal_li>ul>li:nth-of-type(5)").mouseover(function () {
  $(".img_box img").attr("src", "./image/rec.jpg");
});
$(".modal_li>ul>li:nth-of-type(6)").mouseover(function () {
  $(".img_box img").attr("src", "./image/magazine.jpg");
});
// sub_modal
$(".sub_open2").click(function () {
  $(".sub_modal").slideDown();
  $(".sub_modal").css("display", "grid");
  $("body").css({ position: "sticky", overflow: "hidden" });
});
$(".sub_close").click(function () {
  $(".sub_modal").slideUp();
  $("body").css({ position: "static", overflow: "auto" });
});
