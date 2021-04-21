window.onload = function(){  //stop reading and start read body document
  var btn = document.getElementById("btn"); // "btn"div tag will be returned. div 100%
  btn.addEventListener("click",function(){
  //  alert("test");
  var para = document.getElementsByTagName("p"); // bring all 'p' tages and return as array type
  for(var i=0;i<para.length;i++){
  para[i].style.color = 'red';
  }
  });
}
