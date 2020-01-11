var lado="";
var id_mais_1=0;



function teste(id){
    if(id%2 == 0){
        lado=2;
        id_mais_1=parseInt(id)-1;
    }else{
        lado=1;
        id_mais_1=parseInt(id)+1;
    }
    //alert(lado +"\n"+id +"\n"+id_mais_1);
    if(lado==1){
        document.getElementById(id).style.background = "green";   
        document.getElementById(id_mais_1).style.background = "black";
    }
    else{
        document.getElementById(id).style.background = "green";   
        document.getElementById(id_mais_1).style.background = "black";
    }


}