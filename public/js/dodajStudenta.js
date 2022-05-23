let forma=document.getElementById("form");
let div=document.getElementById("ajaxstatus");
window.onload=function(){
document.getElementById("dodaj").onclick = function () {
    var ime = document.querySelector('#ime').value;
    var prezime = document.querySelector('#prezime').value;
    var index = document.querySelector('#index').value;
    var grupa = document.querySelector('#grupa').value;

        var student = {
            ime: ime,
            prezime: prezime,
            index: index,
            grupa: grupa
        }
    
        StudentAjax.dodajStudenta(JSON.stringify(student), function () { });
   
    
};



}