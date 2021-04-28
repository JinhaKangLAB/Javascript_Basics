$(document).ready(function(){
    var switchstatus = false;
  //------------ON-------------
  $(".btn1").click(function(){
    // $(".txt1").css({
    //   "background":"blue",
    //   "color":"white"
    // });
    $(".txt1").addClass("a");
    switchstatus = true;
  });
 //------------OFF------------
  $(".btn2").click(function(){
  //   $(".txt1").css({
  //   "background":"white",
  //      "color":"black"
  // });
    $(".txt1").removeClass("a");
    switchstatus = false;
  });
  //------------TOGGLE------------
  $(".btn3").click(function(){

    if(switchstatus==false){
        $(".txt1").addClass("a");
        switchstatus = true;
    }
    else{
        $(".txt1").removeClass("a");
        switchstatus = false;
    }
  //  $(".txt1").toggleClass("a");
  });
});
