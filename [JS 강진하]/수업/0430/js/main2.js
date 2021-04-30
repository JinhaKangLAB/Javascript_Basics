$(document).ready(function(){

 $(".tabMenu1 > dt").click(function(){
  $(".tabMenu1 > dt").removeClass("on");
   $(this).addClass("on");
   $(".tabMenu1 > dd").removeClass("on");
   $(this).next().addClass("on");
 });


$(".tab li").click(function(){
  $(".tab li").removeClass("on");
  $(this).addClass("on");
  var a = $(this).index();
  $(".des > p").eq(a).addClass("on");
});
});
