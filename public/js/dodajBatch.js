window.onload=function(){
    
    document.getElementById("dodaj").onclick = function () {
      
      var studenti = document.querySelector('#batch').value;
     if(studenti=="")
      {
         var pogresno=document.getElementById("ajaxstatus");
         const para = document.createElement("p");
        para.innerText = "Textarea ne smije biti prazan!";
       pogresno.appendChild(para);
  
      }
      else
      { 
          StudentAjax.dodajBatch(studenti,function(){});
     }
      
  };
  }