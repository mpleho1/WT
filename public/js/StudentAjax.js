const StudentAjax=(function(){
  var  dodajStudenta=function(form, fnCallback){
    let obj=JSON.parse(form);
  if(obj.ime=="" || obj.prezime=="" || obj.index=="" || obj.grupa==""){
    const odgovorServera = document.getElementById("ajaxstatus");
    odgovorServera.innerHTML = "Nijedno polje ne smije biti prazno! Ponovite unos!";
    return;
  }
  var ajax = new XMLHttpRequest();
  ajax.onreadystatechange = function() {
    if (ajax.readyState == 4 && ajax.status == 200){
        var response = JSON.parse(ajax.responseText);
        const odgovorServera = document.getElementById("ajaxstatus");
        odgovorServera.innerHTML = response.status;
    }
    else if(ajax.readyState == 4){
      var response = JSON.parse(ajax.responseText);
      const odgovorServera = document.getElementById("ajaxstatus");
      odgovorServera.innerHTML = response.status;      
  
    }
  }
  ajax.open("POST","http://localhost:3000/student",true);
  ajax.setRequestHeader("Content-Type", "application/json");
  ajax.send(form);
} 


var  postaviGrupu=function(indeks,grupa, fnCallback){
      
  var ajax = new XMLHttpRequest();
  var objekat = {
    indeks:indeks,
    grupa: grupa
}
 ajax.onreadystatechange = function() {
  
  if (ajax.readyState == 4 && ajax.status == 200){

    var response = JSON.parse(ajax.responseText);
      const odgovorServera = document.getElementById("ajaxstatus");
      odgovorServera.innerHTML = response.status;
  }

  else if (ajax.readyState == 4 ){ 
    var response = JSON.parse(ajax.responseText);
    const odgovorServera = document.getElementById("ajaxstatus");
    odgovorServera.innerHTML = response.status;
   }

}
    ajax.open("PUT","http://localhost:3000/student/"+indeks,true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(objekat));
} 

var  dodajBatch=function(grupaStudenata, fnCallback){
      
  var ajax = new XMLHttpRequest();
  ajax.onreadystatechange = function() {
      
  if (ajax.readyState == 4 && ajax.status == 200){
      var response = JSON.parse(ajax.responseText);
      const odgovorServera = document.getElementById("ajaxstatus");
      odgovorServera.innerHTML = response.status;
  }

  else if(ajax.readyState==4){
    var response = JSON.parse(ajax.responseText);
    const odgovorServera = document.getElementById("ajaxstatus");
    odgovorServera.innerHTML = response.status;
  }
 
}
    ajax.open("POST","http://localhost:3000/batch/student",true);
    ajax.setRequestHeader("Content-Type", "text/plain");
    ajax.send(grupaStudenata);
} 
return {
        dodajStudenta:dodajStudenta,
         postaviGrupu:postaviGrupu,
         dodajBatch:dodajBatch
      }
      }());
      