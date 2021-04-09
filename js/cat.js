var bandera = false;//Inicia si el juego ha iniciado
var turno = 0;//Indica el turno de cada jugador
var tablero = new Array();//Arreglo de botones

window.onload = function(){
    var iniciar = document.getElementById("inicio")
    iniciar.addEventListener("click",comenzar)
}

function comenzar(){
    bandera = true;
    var jugador1 = document.getElementById("Jugador1");
    var jugador2 = document.getElementById("Jugador2");
    if (jugador1.value==""){
        alert("Falta el nombre del Jugador 1");
        jugador1.focus();
    }else{
        if(jugador2.value==""){
            alert("Falta el nombre del Jugador 2");
            jugador2.focus();
    }else{
        tablero[0] = document.getElementById("B1");
        tablero[1] = document.getElementById("B2");
        tablero[2] = document.getElementById("B3");
        tablero[3] = document.getElementById("B4");
        tablero[4] = document.getElementById("B5");
        tablero[5] = document.getElementById("B6");
        tablero[6] = document.getElementById("B7");
        tablero[7] = document.getElementById("B8");
        tablero[8] = document.getElementById("B9");
        for(var i=0;i<9;i++){
            tablero[i].className="BotonInicio";
            tablero[i].value="I";
        }
        turno = 1;
        document.getElementById("Turno").innerHTML = "Adelantejugador: " + jugador1.value;
    }
}