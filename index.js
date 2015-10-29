$(document).ready(function(){
    
    var open = false;
    
    $("#openbtn").click(function(){
        if(!open) {
            $("#sidewrap").css("margin-left", "0");
            $("#openbtn").css("margin-left", "190px");
            $("#openbtn").css("color", "#bdc3c7");
            open = true;
        }else{
            $("#sidewrap").css("margin-left", "-245px");
            $("#openbtn").css("margin-left", "0.2em");
            $("#openbtn").css("color", "#222a31");
            open = false;
        }
    });
    
});