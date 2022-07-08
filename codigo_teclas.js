// var teclas = {
//     UP:38,
//     DOWN:40,
//     LEFT:37,
//     RIGHT:39 
// };


// document.addEventListener("keydown",dibujarTeclado);

//Se define la variable del color
var color = document.getElementById("seleccionar_color");

//Se define la variable del color de fondo
var colorFondo = document.getElementById("seleccionar_colorFondo");
colorFondo.addEventListener("input", cambiarFondo);

//Se define la variable que posee el canvas
var cuadroDibujo = document.getElementById("area_dibujo");
var papel = cuadroDibujo.getContext("2d");

//Se define la variable que posee el grosor del pincel
var grosor = document.getElementById("valor_grosor");
var valorGrosor = parseInt(grosor.value);

//Coordenadas usadas para posicionar el mouse
//var coordenadas = cuadroDibujo.getBoundingClientRect();
coordenadas=0;

//Se ejecuta la funcion opcionDibujar al momento de clickear el botón de dibujar
let btnDraw= document.getElementById("boton_dibujar");
btnDraw.addEventListener('click',opcionDibujar);

//Se ejecuta la funcion opcionBorrar al momento de clickear el botón de borrar
let btnErase= document.getElementById("boton_borrar");
btnErase.addEventListener('click',opcionBorrar);

//Se ejecuta la funcion opcionClear al momento de clickear el botón de eliminar todo
let btnClear= document.getElementById("boton_clear");
btnClear.addEventListener('click',opcionClear);

//Booleanos que definen si se elige el pincel de colores, o el blanco para borrar
var botonDibujarEnable=true;
var botonBorrarEnable;


function cambiarFondo(){
    papel.fillStyle=colorFondo.value;
    papel.fillRect(0, 0, cuadroDibujo.width, cuadroDibujo.height);

}
function opcionClear()
{
    papel.clearRect(0, 0, cuadroDibujo.width, cuadroDibujo.height);
}
function opcionDibujar()
{
    botonDibujarEnable=true;
    botonBorrarEnable=false;
    console.log(botonDibujarEnable);
    console.log(botonDibujarEnable);

}
function opcionBorrar()
{
    botonDibujarEnable=false;
    botonBorrarEnable=true;
    console.log(botonDibujarEnable);
    console.log(botonDibujarEnable);
}

function getGrosor(){
    grosor = document.getElementById("valor_grosor");
    valorGrosor = parseInt(grosor.value);
    return valorGrosor;
}

//Eventos del mouse
document.addEventListener("mousedown", pulsarMouse);
document.addEventListener("mousemove", moverMouse);
document.addEventListener("mouseup",levantarMouse);

//Booleano que define si se esta haciendo click para dibujar
var dibujando=false;
var x,y;


function pulsarMouse(evento)
{
    dibujando = true;
    x = evento.layerX;
    y = evento.layerY;
}

function moverMouse(evento)
{
    if(dibujando == true)
    {
        dibujarLinea(color.value, x , y , evento.layerX, evento.layerY);
    }else{
        x = evento.layerX;
        y = evento.layerY;
    }
}

function levantarMouse(evento)
{
    dibujando = false;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    papel.beginPath();

    papel.lineWidth = getGrosor();
    console.log(grosor.value);

    if(botonDibujarEnable==true){
        papel.strokeStyle = color;
    }
    if(botonBorrarEnable==true){
        papel.strokeStyle = "white";
    }
    
    papel.moveTo(xinicial, yinicial);
    papel.lineTo(xfinal, yfinal);
    papel.stroke();
    papel.closePath;
}

// dibujarLinea("red",x-1,y-1,x+1,y+1,papel);

// function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
// {
//     lienzo.beginPath();
//     lienzo.strokeStyle = color;
//     lienzo.lineWidth = 3; 
//     lienzo.moveTo(xinicial,yinicial);
//     lienzo.lineTo(xfinal,yfinal);
//     lienzo.stroke();
//     lienzo.closePath();
// }


// function dibujarTeclado(evento){
//     console.log(evento.keyCode);
//     var colorcito = "blue";
//     movimiento = 10;

//     switch(evento.keyCode){
//         case teclas.UP:
//             console.log("Ariba");
//             dibujarLinea(colorcito,x, y, x, y-movimiento, papel);
//             y=y-movimiento;
//             break; 
//         case teclas.DOWN:
//             console.log("Abajo");
//             dibujarLinea(colorcito,x, y, x, y+movimiento, papel);
//             y=y+movimiento;
//             break;
//         case teclas.LEFT:
//             console.log("Izquierda");
//             dibujarLinea(colorcito,x, y, x-movimiento, y, papel);
//             x=x-movimiento;
//             break;
//         case teclas.RIGHT:
//             console.log("Derecha");
//             dibujarLinea(colorcito,x, y, x+movimiento, y, papel);
//             x=x+movimiento;
//             break;
//         default:
//             console.log("Inexistente");
//             break;
//     }
    
// }