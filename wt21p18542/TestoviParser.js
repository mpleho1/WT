var TestoviParser = (function() {
var dajTacnost = function(str){

    try{
    var obj = JSON.parse(str);
    var procenat= (obj.stats.passes/obj.stats.tests)*100;
    var novi="";
    if(Math.round(procenat)==procenat){
        novi=Math.round(procenat)+"%";
    }
    else {
        novi=Number.parseFloat(procenat).toFixed(1)+"%";
    }

    var niz=[];
    for( let i=0; i<obj.failures.length; i++ ){
        niz[i]=obj.failures[i].fullTitle;
    }

    var obj2={
        "tacnost":novi,
        "greske":niz
    }
    console.log(obj2);
    return obj2;
}catch(e){
  var obj22={
     "tacnost":"0%",
     "greske":["Testovi se ne mogu izvrsiti"]
 }   
}
console.log(obj22);
return obj22;
}

var porediRezultate=function(rezultat1,rezultat2){
    var rezultat1=JSON.parse(rezultat1);
    var rezultat2=JSON.parse(rezultat2);
    var isti=1;
    var isti1=1;
    var x;
    var padajuU1=[];

    //racunanje x
    for(var i=0; i<rezultat1.tests.length; i++){
        /*for(var j=0; j<rezultat2.tests.length; j++){
        if(rezultat1.tests[i].fullTitle!=rezultat2.tests[j].fullTitle){ isti=0; break; }
        }*/
        if(!rezultat2.tests.find(x=>x.fullTitle==rezultat1.tests[i].fullTitle)){ isti=0;}
        if(isti==0){break;}
    }
        if(isti==1){
            var tac=dajTacnost(JSON.stringify(rezultat2));
            x=tac.tacnost;
        }
        else if(isti==0){
            for(var i=0; i<rezultat1.failures.length; i++){
                var razlika=1;
                for( var j=0; j<rezultat2.tests.length; j++ ){
                    if(rezultat1.failures[i].fullTitle==rezultat2.tests[j].fullTitle){ razlika=0; break;}
                }
                if(razlika==1) { padajuU1.push(rezultat1.failures[i].fullTitle); }
            }
            x=(padajuU1.length+rezultat2.failures.length)/(padajuU1.length+rezultat2.tests.length)*100;
        }
        if(Math.round(x)==x){
            x=Math.round(x)+"%";
        }
        else {
            x=Number.parseFloat(x).toFixed(1)+"%";
        }

        //trazenje niza gresaka
        var nizGresaka=[];
        var padajuU2=[];
        
        for( var i=0; i<rezultat1.tests.length; i++){
            for( var j=0; j<rezultat2.tests.length; j++){
                if(rezultat1.tests[i].fullTitle!=rezultat2.tests[j].fullTitle){ isti1=0; break; }
            }
        }
        if(isti1==1){
            var obj=dajTacnost(JSON.stringify(rezultat2));
           
            nizGresaka=obj.greske;
            nizGresaka.sort(); 
        }
        else if(isti1==0){
            for(var i=0; i<rezultat2.failures.length; i++){
                padajuU2.push(rezultat2.failures[i].fullTitle); }
            }
            padajuU1.sort();
            padajuU2.sort();
            nizGresaka=padajuU1.concat(padajuU2);

            
     var vracanje={
        "promjene":x ,
        "greske":nizGresaka
  
      }
    
  
      console.log(vracanje);
      return vracanje;
}


return {
    dajTacnost:dajTacnost,
    porediRezultate:porediRezultate
}



}());


