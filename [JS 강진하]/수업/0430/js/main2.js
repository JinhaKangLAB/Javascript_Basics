$(document).ready(function(){

 $(".tabMenu1 > dt").click(function(){
  $(".tabMenu1 > dt").removeClass("on");
   $(this).addClass("on"); //사용자 클릭 dt
   $(".tabMenu1 > dd").removeClass("on");
   $(this).next().addClass("on");
 });


$(".tab li").click(function(){
  $(".tab li").removeClass("on");
  $(this).addClass("on");
  var a = $(this).index();
  $(".des > p").removeClass("on");
  $(".des > p").eq(a).addClass("on");
});
var des3List = ['Lorem1 ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati',
'Lorem2 ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
'Lorem3 ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru'
];

$(".des3").text(des3List[0]);
$("tab3 li").click(function(){
  $(".tab3 li").removeClass("on");
    $(this).addClass("on");

})

});
