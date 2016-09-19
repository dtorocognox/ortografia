var b;
function inicio() {

    b = document.getElementById("boton");
    b.addEventListener("click", calcular);
}

function calcular() {
    var a = document.getElementById("p1");
    var palabra = a.value;
    if(palabra == "diptongo"){
        alert("genio");
    }else{
        alert("idioto");
    };

}