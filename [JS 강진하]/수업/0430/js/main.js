$(document).ready(function(){

  var num = 0;


  $(".btn_next").click(function(){
    num++;
    if(num > 3){
      num = 0;
    }
    $(".slider").css("left",(-100*num)+"%");
    $(".slider >li").removeClass("on");
    $(".slider > li").eq(num).addClass("on");
  });

  $(".btn_prev").click(function(){
    num--;
    if(num < 0){
      num = 0;
    }
    sliderMove(num);
    // $(".slider").css("left",(-100*num)+"%");
    // $(".slider >li").removeClass("on");
    // $(".slider > li").eq(num).addClass("on");
  });

var sliderTimer = setInterval(function(){
  num++;
  if(num > 3){num=0;}
    sliderMove(num);
  // $(".slider").css("left",(-100*num)+"%");
  // $(".slider >li").removeClass("on");
  // $(".slider > li").eq(num).addClass("on");
},2000);

$(".slider").mouseover(function(){
  clearInterval(sliderTimer);
});

$(".slider").mouseout(function(){
   sliderTimer = setInterval(function(){
    num++;
    if(num > 3){num=0;}
      sliderMove(num);
    // $(".slider").css("left",(-100*num)+"%");
    // $(".slider >li").removeClass("on");
    // $(".slider > li").eq(num).addClass("on");
  },2000);
});

function sliderMove(slideIndex){
  $(".slider").css("left",(-100*slideIndex)+"%");
  $(".slider >li").removeClass("on");
  $(".slider > li").eq(slideIndex).addClass("on");
}

});
