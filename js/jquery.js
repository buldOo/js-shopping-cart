$(document).ready(function(){

    $(".add-to-cart").on("click", function(){
      $("#dialog").animate({height: 50, width: 150,position: "absolute",top:10, color: "black", display: "flex"},1200);
        $("#dialog").animate({
              
          backroundColor: "none",
          color:"black",
          width: 150,
          height :0,
        }, 1000);
        $("#dialog").animate({height: 0, width: 0,position: "absolute",top:0, color: "white", display: "flex"});
      });
    })