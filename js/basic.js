$(document).ready(function(){
    
    var open = false;
    $("#openbtn").addClass("closed");
    $("#openbtn").removeClass("open");
    
//    $("#openbtn").click(function(){
//        if(!open) {
//            $("#sidewrap").css("margin-left", "0");
//            $("#openbtn").css("margin-left", "190px");
//            $("#openbtn").css("color", "#bdc3c7 !imporant");
//            console.log("set open to TRUE");
//            open = true;
//        }else{
//            $("#sidewrap").css("margin-left", "-245px");
//            $("#openbtn").css("margin-left", "0.2em");
//            $("#openbtn").css("color", "#222a31  !imporant");
//            console.log("set open to FALSE");
//            open = false;
//        }
//    });
    
    $("#openbtn").click(function(){
        if(!open) {
            $("#sidewrap").css("margin-left", "0");
            $("#openbtn").addClass("open");
            $("#openbtn").removeClass("closed");
            console.log("set open to TRUE");
            open = true;
        }else{
            $("#sidewrap").css("margin-left", "-245px");
            $("#openbtn").addClass("closed");
            $("#openbtn").removeClass("open");
            console.log("set open to FALSE");
            open = false;
        }
    });
    
});