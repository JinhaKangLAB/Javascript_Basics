$(document).ready(function(){

  var num = 0;


  $(".btn_next").click(function(){
    num++;
    if(num > 3){
      num = 0;
    }
    $(".slider").css("left",(-100*num)+"%");
  });

  $(".btn_prev").click(function(){
    num--;
    if(num < 0){
      num = 0;
    }
    $(".slider").css("left",(-100*num)+"%");
  });


});
