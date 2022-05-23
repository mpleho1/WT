
const vjezbeAjax=(function(){

  var dodajInputPolja=function(form,brojVjezbi){

    if(brojVjezbi>0 && brojVjezbi<=15 ){
    for(let i=0; i<brojVjezbi; i++){
      let div = document.createElement("div"); 
      div.setAttribute("class", "form-row");
  
      let labela = document.createElement("label");
      labela.setAttribute("for", "z"+i);
      labela.innerHTML="Broj zadataka za vjezbu " + (i+1)+": ";
  
      let input = document.createElement("input"); 
      input.value = 4; 
      input.setAttribute("min", "0");
      input.setAttribute("max", "10");
      input.setAttribute("type", "number"); 
      input.setAttribute("id", "z"+i); 
      input.setAttribute("name", "z"+i); 
  
      div.appendChild(labela);      
      div.appendChild(input); 
  
      form.appendChild(div);
    }
    
  let button = document.createElement("input");   
  button.setAttribute("type", "button");  
  button.setAttribute("value", "Posalji");
  button.setAttribute("id", "posalji");
  form.appendChild(button);  

  button.addEventListener("click",function(){ vjezbeAjax.posaljiPodatke(form, (error,data)=>{
  
    if(error==null){
      ispisi(null,data);
    }
    else {
      alert("Ponovite unos! Pogrešno unesen broj zadataka! "+ error);
  
      
    }
  })});
  
  }
  else{
   alert("Ponovite unos! Pogrešan parametar broj vježbi!");
  }
  
  
  
  }
  
    
  
  var  posaljiPodatke=function(form, fnCallback){
    
    let brojVjezbi, brojZadataka=[]; 
    brojVjezbi = form.length - 1; 
    for(let i=0; i<brojVjezbi; i++){
      brojZadataka.push(parseInt(form.elements[i].value));
    }
    
    var object = {
      brojVjezbi:brojVjezbi, 
      brojZadataka:brojZadataka
    }
  
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200){
            let jsonRez = JSON.parse(ajax.responseText);
           
            fnCallback(null,jsonRez);
        }
  
        else if (ajax.readyState == 4){
          let jsonRez = JSON.parse(ajax.responseText); 
      
          fnCallback(jsonRez.data,null);
        }
    }
    ajax.open("POST","http://localhost:3000/vjezbe",true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(object));
  
  
  
  }
  
  var dohvatiPodatke=function(fnCallback){
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
    if (ajax.readyState == 4 && ajax.status == 200){
  
      let objekatVjezbe = JSON.parse(ajax.responseText); 
      let brojVjezbi=objekatVjezbe.brojVjezbi;
      let zadaci=objekatVjezbe.brojZadataka;
      let pogresni=[];
      if(brojVjezbi<1 || brojVjezbi>15){
          pogresni.push("brojVjezbi");
          
      }
      
      for(var i=0; i<zadaci.length; i++){
          if(zadaci[i]<0 || zadaci[i]>10){
              pogresni.push("z"+(i+1));
          }
      }
      if(brojVjezbi!=zadaci.length || zadaci.length<0 || zadaci.length>15 ){
        pogresni.push("brojZadataka");
    }
  
      let objekat={
        status:'error',
        data:"Pogrešan parametar "+ pogresni
    }
    
  
    if(pogresni.length>0) {
      //let res= JSON.parse(ajax.responseText); 
     res.status(400);
      res.send(JSON.stringify(objekat)); 
      //fnCallback(objekat,null);
      return;
  }
      fnCallback(null,objekatVjezbe);
    }
  
  else if (ajax.readyState == 4 && ajax.status==400){
    let jsonRez = JSON.parse(ajax.responseText); 
    fnCallback(jsonRez.data,null);
  }
    }
    ajax.open("GET","http://localhost:3000/vjezbe",true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send();
  
  }
  
  
  
  var iscrtajVjezbe=function(odabirVjezbe,objekat){
    vjezbeDivs = []; 
    var brojVjezbi1=objekat.brojVjezbi;
    var brojZadataka1=objekat.brojZadataka;
     if(brojVjezbi1>15 || brojVjezbi1<=0){
       console.log("Pogresan broj vjezbi");
       return ;
     }
  
     for(let i=0; i<brojVjezbi1; i++){
      let prazanDiv=document.createElement("div");
      prazanDiv.setAttribute("id", "divVjezbe"+(i+1));
      prazanDiv.hidden = true; 
      let button = document.createElement("input");   
      button.setAttribute("type", "button");  
      button.setAttribute("id","vjezbe"+(i+1));
      button.setAttribute("value", "Vjezba"+(i+1));
        odabirVjezbe.appendChild(button);
      odabirVjezbe.appendChild(prazanDiv);
      vjezbeDivs.push(prazanDiv); 
     button.addEventListener("click",function(){ vjezbeAjax.iscrtajZadatke(prazanDiv,parseInt(brojZadataka1[i]))}); 
    
  
     
     }
  }
  
  var iscrtajZadatke=function(vjezbe, brojZadataka){ 
    vjezbe.innerHTML="";
    if(brojZadataka>=1 && brojZadataka<=15){
      for(let i = 0; i<vjezbeDivs.length; i++){
          if(vjezbeDivs[i].getAttribute("id") == vjezbe.getAttribute("id")){ 
            let currentHiddenValue = vjezbe.hidden; 
            if(currentHiddenValue){                
              vjezbeDivs[i].hidden = false; 
            }
            else {
              vjezbeDivs[i].hidden = true; 
            } 
          }  
          else
          vjezbeDivs[i].hidden = true; 
      }
  
      for(let i=0; i<brojZadataka; i++){
        let button = document.createElement("input");   
        button.setAttribute("type", "button");  
        button.setAttribute("id","z"+(i+1));
        button.setAttribute("value", "Zadatak"+(i+1));  
        vjezbe.appendChild(button);    
      }  
    }
    else {
  
      vjezbe.innerHTML="";
  
    }
    
  }  
  
  return {
    iscrtajZadatke: iscrtajZadatke,
    iscrtajVjezbe: iscrtajVjezbe,
    dohvatiPodatke: dohvatiPodatke,
    posaljiPodatke: posaljiPodatke,
    dodajInputPolja: dodajInputPolja
  }
  }());
  