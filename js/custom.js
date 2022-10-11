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
// date
function clock() {
  var now = new Date();
  var year = now.getFullYear();

  var month = now.getMonth() + 1;

  var date = now.getDate();

  var day = now.getDay();

  var hr = now.getHours();

  var min = now.getMinutes();

  var sec = now.getSeconds();

  $(".js_time").text(
    year + "." + month + "." + date + "\u00A0" + hr + ":" + min + "\u00A0" + sec
  );
}
clock();
setInterval(clock, 1000);
// section button
$(".js_tab button:first-child").click(function () {
  $(".tab_cont").show();
  $(".tab_cont2").hide();
  $(".respon_text>p:eq(0)").text("Twice");
  $(".respon_text>p:eq(1)").text("Album");
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
  $(".tab_cont .img_radius img").attr("src", "./image/twice.jpg");
});
$(".js_tab button:last-child").click(function () {
  $(".tab_cont2").css("display", "grid");
  $(".tab_cont").hide();
  $(".tab_cont2 .respon_text>p:eq(0)").text("Postmalone");
  $(".tab_cont2 .respon_text>p:eq(1)").text("Album");
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
  $(".tab_cont2 .img_radius img").attr("src", "./image/post.jpg");
});
// responsive_tab
$(window).on("load resize", function () {
  $(".sel_button").change(function () {
    if ($(window).width() < 767)
      var result = $(".sel_button option:selected").val();
    {
      if (result == "one") {
        $(".tab_cont").show();
        $(".tab_cont2").hide();
        $(".respon_text>p:eq(0)").text("Twice");
        $(".respon_text>p:eq(1)").text("Album");
        $(".tab_cont .img_radius img").attr("src", "./image/twice.jpg");
        $(".js_tab button:first-child").addClass("active");
        $(".js_tab button:first-child").siblings().removeClass("active");
      }
      if (result == "two") {
        $(".tab_cont2").css("display", "grid");
        $(".tab_cont").hide();
        $(".tab_cont2 .img_radius img").attr("src", "./image/post.jpg");
        $(".tab_cont2 .respon_text>p:eq(0)").text("Postmalone");
        $(".tab_cont2 .respon_text>p:eq(1)").text("Album");
        $(".js_tab button:last-child").addClass("active");
        $(".js_tab button:last-child").siblings().removeClass("active");
      }
    }
  });
});
// section tab_cont
$(".right>div:eq(0)").click(function () {
  $(".img_radius img").attr("src", "./image/newjeans.jpg");
  $(".tab_text>p:eq(0)").text("New jeans");
  $(".tab_text>p:eq(1)").text("Attention");
});
$(".right>div:eq(1)").click(function () {
  $(".img_radius img").attr("src", "./image/ive.jpg");
  $(".tab_text>p:eq(0)").text("Ive");
  $(".tab_text>p:eq(1)").text("After LIKE");
});
$(".right>div:eq(2)").click(function () {
  $(".img_radius img").attr("src", "./image/snsd.jpg");
  $(".tab_text>p:eq(0)").text("소녀시대");
  $(".tab_text>p:eq(1)").text("FOREVER 1");
});
$(".right>div:eq(3)").click(function () {
  $(".img_radius img").attr("src", "./image/blackpink.jpg");
  $(".tab_text>p:eq(0)").text("Black pink");
  $(".tab_text>p:eq(1)").text("Pink Venom");
});
// tab_cont2
$(".tab_cont2 .right>div:eq(0)").click(function () {
  $(".img_radius img").attr("src", "./image/imagine.jpg");
  $(".tab_cont2 .tab_text>p:eq(0)").text("Imagine dragons");
  $(".tab_cont2 .tab_text>p:eq(1)").text("Thunder");
});
$(".tab_cont2 .right>div:eq(1)").click(function () {
  $(".img_radius img").attr("src", "./image/oasis.jpg");
  $(".tab_cont2 .tab_text>p:eq(0)").text("Oasis");
  $(".tab_cont2 .tab_text>p:eq(1)").text("Wonderwall");
});
$(".tab_cont2 .right>div:eq(2)").click(function () {
  $(".img_radius img").attr("src", "./image/dualipa.jpg");
  $(".tab_cont2 .tab_text>p:eq(0)").text("Dualipa");
  $(".tab_cont2 .tab_text>p:eq(1)").text("New rules");
});
$(".tab_cont2 .right>div:eq(3)").click(function () {
  $(".img_radius img").attr("src", "./image/bieber.jpg");
  $(".tab_cont2 .tab_text>p:eq(0)").text("Justin bieber");
  $(".tab_cont2 .tab_text>p:eq(1)").text("Stay");
});
// slick
$(".slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
