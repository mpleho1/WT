window.onload=function(){
    
    function popuniElemente(error, data) {
    var parsedData = JSON.parse(data);

    document.querySelector('#indeks').value = parsedData.index;
    document.querySelector('#grupa').value = parsedData.grupa.naziv;

}




document.getElementById("dodaj").addEventListener("click", function () {
    var index = document.querySelector('#indeks').value;
    var grupa = document.querySelector('#grupa').value;
    StudentAjax.postaviGrupu(index, grupa, function () { });
});
}