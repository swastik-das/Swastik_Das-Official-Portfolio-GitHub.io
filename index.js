$(document).ready(function(){
$(".ham").click(function(){ 
     $(".ham_bar_res").css({"left":"0px"});
    });  
$("#btn_youtube").click(function(){
    alert("Youtube is coming soon check out another ")
}) 
$ (".close_nt").click(function(){
$(".nti").css({"opacity":"0"});
});
$(".icon_close").click(function(){
 $(".ham_bar_res").css({"left":"-440px"});  
}); 
    $(window).scroll(function(){
     if($(this).scrollTop()>55){
      $(".img_set").css({ "transform":"scale(1.1)"});
      $(".about").css({ "transform":"scale(1.1)"});
     };
     if($(this).scrollTop()>805){
      $(".clr_h").css({ "transform":"scale(1.1)"});
      $(".logo_sxe").css({ "font-size":"40px","top":"30px"});
      $(".clr_p").css({"transform":"scale(1.0)"});
     };
     if($(this).scrollTop()>1630){
        $(".nti").css({"display":"inline"})
     $(".stick_auto2").css( {"height" :"430px"});
     $(".circle1").css( {"background-color":"#FFBF00"});
     $(".circle2").css( {"background-color":"#FFBF00"});
     $(".circle3").css( {"background-color":"#FFBF00"});
     $(".circle4").css( {"background-color":"#FFBF00"});
     $(".bbbr").css( {"opacity":0.9});
     $(".bbbr1").css( {"opacity":0.9});
     $(".bbbr2").css( {"opacity":0.9});
     $(".bbbr3").css( {"opacity":0.9});
     };

    });
    });
        