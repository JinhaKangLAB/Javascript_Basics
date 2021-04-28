$(document).ready(function(){
  var a = $(".obj1").text(); //text return function, scroll the text when there is no ingredient
  $(".obj1").text("요소객체조작"); // put the ingredient itself
  //--------------------.append & .prepend---------------------------------
  $('#obj2').append("<li>리스트4</li>"); //add,앞의 선택한 대상의 자식으로 넣어주는 함수, 마지막
  $('#obj2').append("<li>리스트5</li>"); //add
  $("#obj2").prepend("<li>리스트0</li>"); //가장 첫 번째로 추가
  //-------------------.text & .html---------------------------------------
  //$("#obj2").text("<li>리스트0</li>");
  //1. .text 는 태그 문법을 쓰지 x,완전한 텍스트 형태로 입력, 2.원래 문자를 싹 다 지움
  //$("#obj2").html("<li>리스트0</li>"); //태그로 받아드림, 원래 있던 내용을 싹 다 지움

  $('body').append("<div class='box'></div>");
  $('.box').append("<h2>복사된 리스트</h2>");

  $("#obj2").clone().appendTo(".box"); //return copied text
  $(".box").remove(); //
  var b = $(".obj3").attr("class");
  //alert(b);
  var c = $(".catimg").attr("alt");
  //alert(c);
  $(".catimg").attr("src","./img/cat1.jpg");
  $(".a").addClass("b");
  $(".a").addClass("c");
  $(".a").removeClass("c");
  /*$(".a")removeClass(); //class 자체가 지워짐*/
});
