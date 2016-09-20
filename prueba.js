var wordX = ["arruga", "pelado", "hélice", "turbulencia"];

function start() {
    var button = document.getElementById("boton");
    button.addEventListener("click", match);
}

function match() {

    var singleWord, objectWord;
    var index;

    for(i=0; i<1; i++){
        for (j=1; j < 5; j++){

            index = "p" + i + j;

            //obtiene caja de texto
            objectWord = document.getElementById(index);

            //ingresa palabra de la caja y la convierte en minuscula
            singleWord = objectWord.value.toLowerCase();

            if(wordX[j-1] == singleWord){
                changeColor(objectWord, true);
            }else{
                changeColor(objectWord, false);
            }
        }
    }
}

function changeColor(object, boolean){

    if(boolean == true){
        object.style.border="green 1px solid";
    }else{
        object.style.border="red 1px solid";
    }

}