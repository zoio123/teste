
var controle1 = 0;
var controle2 = 0;
var controle3 = 0;
var controle4 = 0;

/*
=============================================================
CONTROLE 1
=============================================================
===================
HOVER - CONTROLE 1
==================
*/
$(document).ready(function(){
    $("#card1").hover(function(){
        if(controle1===0){
            //$(this).removeClass("card border-danger mb-3");
            $(this).addClass("card bg-warning mb-3");
        }
    }, function(){
        $(this).removeClass("card bg-warning mb-3");
        //$(this).addClass("card border-danger mb-3");
    });  
});
$(document).ready(function(){
    $("#card2").hover(function(){
        if(controle1===0){
            //$(this).removeClass("card border-danger mb-3");
            $(this).addClass("card bg-warning mb-3");
        }
    }, function(){
        $(this).removeClass("card bg-warning mb-3");
        //$(this).addClass("card border-danger mb-3");
    });  
});
/*
===================
CLICK - CONTROLE 1
==================
*/
$("#card1").click(function(){
    if(controle1===0){
        //$(this).removeClass("card border-danger mb-3");
        $(this).removeClass("card bg-warning mb-3");
        $(this).addClass("card bg-success mb-3");
        //$("#card2").removeClass("card border-danger mb-3");
        $("#card2").removeClass("card bg-warning mb-3");
        $("#card2").addClass("card bg-dark mb-3");
        controle1=1;
    }
    else{
        alert($("#card1").attr('class'));
    }   
});
$("#card2").click(function(){
    if(controle1===0){
        //$(this).removeClass("card border-danger mb-3");
        $(this).removeClass("card bg-warning mb-3");
        $(this).addClass("card bg-success mb-3");
        //$("#card1").removeClass("card border-danger mb-3");
        $("#card1").removeClass("card bg-warning mb-3");
        $("#card1").addClass("card bg-dark mb-3");  
        controle1=1;       
    } 
    else{
        alert($("#card2").attr('class'));
    }   
});

/*
=============================================================
CONTROLE 2
=============================================================
===================
HOVER - CONTROLE 2
==================
*/
$(document).ready(function(){
    $("#card3").hover(function(){
        if(controle2===0){
            $(this).removeClass("card border-danger mb-3");
            $(this).addClass("card text-white bg-warning mb-3");
        }
    }, function(){
        $(this).removeClass("card text-white bg-warning mb-3");
        $(this).addClass("card border-danger mb-3");
    });  
});
$(document).ready(function(){
    $("#card4").hover(function(){
        if(controle2===0){
            $(this).removeClass("card border-danger mb-3");
            $(this).addClass("card text-white bg-warning mb-3");
        }
    }, function(){
        $(this).removeClass("card text-white bg-warning mb-3");
        $(this).addClass("card border-danger mb-3");
    });  
});
/*
===================
CLICK - CONTROLE 2
==================
*/
$("#card3").click(function(){
    if(controle2===0){
        $(this).removeClass("card border-danger mb-3");
        $(this).removeClass("card text-white bg-warning mb-3");
        $(this).addClass("card text-white bg-success mb-3");
        $("#card4").removeClass("card border-danger mb-3");
        $("#card4").removeClass("card text-white bg-warning mb-3");
        $("#card4").addClass("card text-white bg-dark mb-3");
        controle2=1;
    }   
});
$("#card4").click(function(){
    if(controle2===0){
        $(this).removeClass("card border-danger mb-3");
        $(this).removeClass("card text-white bg-warning mb-3");
        $(this).addClass("card text-white bg-success mb-3");
        $("#card3").removeClass("card border-danger mb-3");
        $("#card3").removeClass("card text-white bg-warning mb-3");
        $("#card3").addClass("card text-white bg-dark mb-3");  
        controle2=1;
    }    
});

/*
=============================================================
CONTROLE 3
=============================================================
===================
HOVER - CONTROLE 3
==================
*/
$(document).ready(function(){
    $("#card5").hover(function(){
        if(controle3===0){
            $(this).removeClass("card border-danger mb-3");
            $(this).addClass("card text-white bg-warning mb-3");
        }
    }, function(){
        $(this).removeClass("card text-white bg-warning mb-3");
        $(this).addClass("card border-danger mb-3");
    });  
});
$(document).ready(function(){
    $("#card6").hover(function(){
        if(controle3===0){
            $(this).removeClass("card border-danger mb-3");
            $(this).addClass("card text-white bg-warning mb-3");
        }
    }, function(){
        $(this).removeClass("card text-white bg-warning mb-3");
        $(this).addClass("card border-danger mb-3");
    });  
});
/*
===================
CLICK - CONTROLE 3
==================
*/
$("#card5").click(function(){
    if(controle3===0){
        $(this).removeClass("card border-danger mb-3");
        $(this).removeClass("card text-white bg-warning mb-3");
        $(this).addClass("card text-white bg-success mb-3");
        $("#card6").removeClass("card border-danger mb-3");
        $("#card6").removeClass("card text-white bg-warning mb-3");
        $("#card6").addClass("card text-white bg-dark mb-3");  
        controle3=1;
    }    
});
$("#card6").click(function(){
    if(controle3===0){
        $(this).removeClass("card border-danger mb-3");
        $(this).removeClass("card text-white bg-warning mb-3");
        $(this).addClass("card text-white bg-success mb-3");
        $("#card5").removeClass("card border-danger mb-3");
        $("#card5").removeClass("card text-white bg-warning mb-3");
        $("#card5").addClass("card text-white bg-dark mb-3");
        controle3=1;
    }   
});

/*
=============================================================
CONTROLE 4
=============================================================
===================
HOVER - CONTROLE 4
==================
*/
$(document).ready(function(){
    $("#card7").hover(function(){
        if(controle4===0){
            $(this).removeClass("card border-danger mb-3");
            $(this).addClass("card text-white bg-warning mb-3");
        }
    }, function(){
        $(this).removeClass("card text-white bg-warning mb-3");
        $(this).addClass("card border-danger mb-3");
    });  
});
$(document).ready(function(){
    $("#card8").hover(function(){
        if(controle4===0){
            $(this).removeClass("card border-danger mb-3");
            $(this).addClass("card text-white bg-warning mb-3");
        }
    }, function(){
        $(this).removeClass("card text-white bg-warning mb-3");
        $(this).addClass("card border-danger mb-3");
    });  
});
/*
===================
CLICK - CONTROLE 4
==================
*/
$("#card7").click(function(){
    if(controle4===0){
        $(this).removeClass("card border-danger mb-3");
        $(this).removeClass("card text-white bg-warning mb-3");
        $(this).addClass("card text-white bg-success mb-3");
        $("#card8").removeClass("card border-danger mb-3");
        $("#card8").removeClass("card text-white bg-warning mb-3");
        $("#card8").addClass("card text-white bg-dark mb-3");  
        controle4=1;
    }    
});
$("#card8").click(function(){
    if(controle4===0){
        $(this).removeClass("card border-danger mb-3");
        $(this).removeClass("card text-white bg-warning mb-3");
        $(this).addClass("card text-white bg-success mb-3");
        $("#card7").removeClass("card border-danger mb-3");
        $("#card7").removeClass("card text-white bg-warning mb-3");
        $("#card7").addClass("card text-white bg-dark mb-3");
        controle4=1;
    }   
});