//$("선택할 태그의 태그명이나, 클래스명, 아이디명-css 선택자 방식")
//$("*").css("font-size","13px");
  $(document).ready(function(){//문서를 다 읽고 적용해, 메디함수의 콜백함수
      $("*").css("font-size","13px"); //in line style 방식
      S("h1").css("color","red");
      $("#firstTitle").css("color","green");
      $(".nextTitle").css("color","blue");
      $(".obj1").parent():css("background","orange");
      $(".obj3 > li").css("font-weight","bold");
      $(".obj3").children(".theObj1").css("color","purple");
      $(".obj4").prev().css("border","1px solid red"); //이전형제 선택자
      $(".obj5").next().css("border"."1px solid blue").css("background","orage");//제이쿼리 체이닝 기법, 다음형제 선택
      $(".obj6").siblings().css({
      "text-align":"center",
      "color":"red"//선택 대상 제외 나머지 형제들을 리턴, obj6는 선택안).
    }); //제이쿼리 제이닝 기 //
      //$(".obj3 > li:nth-of-type(1)").css("font-size","2em");  //eq 선택자
      $(".obj3 > li").eq(0).css("font-size","2em");
      $(".obj7").find("span").css("color","orange");
      $("#firstTitle").html("<a href='#'>선택자</a>"); //document.write와 비슷, a태그

      //$(".obj7").children(".obj6").children("span").css("color","orange");
  });
