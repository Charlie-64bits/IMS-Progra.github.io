var bandera = false;//Inicia si el juego ha iniciado
var turno = 0;//Indica el turno de cada jugador
var tablero = new Array();//Arreglo de botones

function Comenzar(){
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
            tablero[i].className="botonInicio";
            tablero[i].value="I";
        }
        turno = 1;
        document.getElementById("Turno").innerHTML = "Turno del jugador: " + jugador1.value;
    }
}}
function Colocar(boton){
    if (bandera==true){
        if (turno==1 && boton.value=="I"){
            turno = 2;
            document.getElementById("Turno").innerHTML = "Turno del jugador: " + jugador2.value;
            boton.value = "X";
            boton.className = "botonJugador1";
        }else{
            if (turno==2 && boton.value=="I"){
                turno = 1;
                document.getElementById("Turno").innerHTML = "Turno del jugador: " + jugador1.value;
                boton.value = "O";
                boton.className = "botonJugador2";   
            }
        }
    }
    revisar();
}
function revisar(){
    if((tablero[0].value=="X" && tablero[1].value=="X" && tablero[2].value=="X")
    || (tablero[3].value=="X" && tablero[4].value=="X" && tablero[5].value=="X")
    || (tablero[6].value=="X" && tablero[7].value=="X" && tablero[8].value=="X")
    || (tablero[0].value=="X" && tablero[3].value=="X" && tablero[6].value=="X")
    || (tablero[1].value=="X" && tablero[4].value=="X" && tablero[7].value=="X")
    || (tablero[2].value=="X" && tablero[5].value=="X" && tablero[8].value=="X")
    || (tablero[0].value=="X" && tablero[4].value=="X" && tablero[8].value=="X")
    || (tablero[2].value=="X" && tablero[4].value=="X" && tablero[6].value=="X")
    ){
        alert("Felicidades ganaste Jugador: " + jugador1.value);
        bandera= false;
    }
    if((tablero[0].value=="O" && tablero[1].value=="O" && tablero[2].value=="O")
    || (tablero[3].value=="O" && tablero[4].value=="O" && tablero[5].value=="O")
    || (tablero[6].value=="O" && tablero[7].value=="O" && tablero[8].value=="O")
    || (tablero[0].value=="O" && tablero[3].value=="O" && tablero[6].value=="O")
    || (tablero[1].value=="O" && tablero[4].value=="O" && tablero[7].value=="O")
    || (tablero[2].value=="O" && tablero[5].value=="O" && tablero[8].value=="O")
    || (tablero[0].value=="O" && tablero[4].value=="O" && tablero[8].value=="O")
    || (tablero[2].value=="O" && tablero[4].value=="O" && tablero[6].value=="O")
    ){
        alert("Felicidades ganaste Jugador: " + jugador2.value);
        bandera= false;
    }   
}