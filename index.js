let num_imagen = 1;
let shante =document.getElementById("shante");
let detener = document.getElementById("detener");

let ancho_pantalla=screen.width;
let alto_pantalla=screen.height;
console.log("Ancho de la pantalla "+ancho_pantalla);
console.log("Alto de la pantalla "+alto_pantalla);

let animacion = setInterval(cambiar_imagen, 50);

function cambiar_imagen() {
    num_imagen = num_imagen+1;
    let direc;
    if (num_imagen > 15) {
        num_imagen = 1;
    }
    direc ="img/shante/Shante_"+num_imagen+".png"

    shante.setAttribute("src",direc)
}

//Eventos al precionar las teclas
//onkeydown
//onkeyup
//onkeypress

let x=0;
let y=0;

document.addEventListener("keydown",mover);

function mover(event){
    console.log(event.keyCode);
    //A=65 IZQUIERDA
    //D=68 DERECHA
    //W=87 ARRIBA
    //S=83 ABAJO

    if(event.keyCode == 68)
    {
        console.log("Me estoy moviendo a la derecha");
        x = x+5;
        
        if(x > ancho_pantalla-150){
            x = x-5;
        }
    }
    

    if(event.keyCode == 65)
    {
        console.log("Me estoy moviendo a la izquierda");
        x = x-5;
       
        if(x < 0){
            x = x+5;
        }
    }

    

    if(event.keyCode == 83)
    {
        console.log("Me estoy moviendo hacia abajo");
        y = y+5;
       console.log(y)
        if(y > alto_pantalla-350){
            y = y-5;
        }
    }

    if(event.keyCode == 87)
    {
        console.log("Me estoy moviendo hacia arriba");
        y = y-5;
        console.log(y)
        if(y < 0){
            y = y+5;
        }
    }

    shante.style.left=x+"px";
    shante.style.top=y+"px";

    

}



// detener.addEventListener("click",parar);

// function parar(){
//     clearInterval(animacion);
// }
