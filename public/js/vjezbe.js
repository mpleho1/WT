var odabirVjezbe,zajednicki, vjezbeDivs = [];
function ispisi(error,data){
 if(error==null){
     vjezbeAjax.iscrtajVjezbe(odabirVjezbe,data);
 }
    else {
       
        console.log(error, data);
    }
  }

window.onload=function(){
    odabirVjezbe=document.getElementById("odabirVjezbe");
    ls=document.getElementById("ls");
  
    vjezbeAjax.dohvatiPodatke(ispisi);
  
}