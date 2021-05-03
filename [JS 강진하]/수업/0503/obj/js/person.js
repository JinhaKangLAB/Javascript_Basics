function Person(userNamve,userAge,userGender){
  this.name = userName;
  this.age = userAge;
  this.gender = userGender;
  this.showState = function(){
    $(".info").append("<h2>당신의 이름은 "+this.name+"이고</h2>");
    $(".info").append("<h2>당신은 올해 "+this.age+"살이고 </h2>");
    $(".info").append("<h2>"+this.gender+"입니다.</h2>");
  }
}

//var person = new Person("",,);
