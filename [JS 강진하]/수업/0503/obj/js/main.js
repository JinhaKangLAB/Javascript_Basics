$(document).ready(function(){
  $(".btn_State").click(function(){
    $(".info *").remove();
    var userName = $("#userName").val();
    var userAge = $("#userAge").val();
    var userGender = $("#userGender").val();
    if(!userName){
      alert("이름을 입력하십시오.");
    }
    if(!userAge){
      alert("나이를 입력하십시오.");
    }
    if(!userGender){
      alert("성별을 입력하십시오.");
    }

    if(userName && userAge && userGender){
      var person = new Person(userName,userAge,userGender);
      person.showState();
    }
    
  });
});
