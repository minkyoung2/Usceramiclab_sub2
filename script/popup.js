$(function(){
    $(".wrap a").click(function(){
        $(".popup").show();//.fadeIn(); 서서히 나타남.
    });
    $(".popup a").click(function(){
        $(".popup").hide();//.fadeOut(); 서서히 사라짐.
    });
});