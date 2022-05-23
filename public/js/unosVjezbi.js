var potvrdi;
var brojVjezbe,forma2,forma;

function ispisi(error,data){
 
    console.log(error, data);
  }
  
window.onload=function(){
    brojVjezbe=document.getElementById("brojVjezbe");
    brojVjezbe.value = 4;  
    potvrdi=document.getElementById("potvrdi");
     forma2=document.getElementById("form2");
    document.getElementById("potvrdi").addEventListener("click",function(){ vjezbeAjax.dodajInputPolja(forma2,parseInt(brojVjezbe.value))});
}
