'use strict'

//Capturamos el formulario
var fomrulario = document.querySelector("#formpeliculas");

//Evento SUBMIT del formulario
fomrulario.addEventListener('submit', ()=>{
    var titulo = document.querySelector("#addpelicula").value;
    if(titulo.length >0){
        localStorage.setItem(titulo, titulo);
    }else{
        alert("Usted NO ingresó ninguna película");
    }
});


//Variables para Eventos
var boton= document.querySelector("#boton");
var boton2= document.querySelector("#boton2");

//MOUSE OVER EVENTO
boton.addEventListener('mouseover', function(){
    boton.style.background= "#2f4e6f";
});
boton2.addEventListener('mouseover', function(){
    boton2.style.background= "#2f4e6f";
});

//MOUSE OUT EVENTO
boton.addEventListener('mouseout', function(){
    boton.style.background= "whitesmoke";
    console.log("Buenas querido tester :)");
});
boton2.addEventListener('mouseout', function(){
    boton2.style.background= "whitesmoke";
    console.log("Buenas querido tester :)");
});

var ul = document.querySelector("#peliculas-list");

//Limitador de pelis que se van a mostrar
var cont = 0;

//Recorremos el localStorage y mostramos su contenido
for(var i in localStorage){

    //Condición para que se muestren solo 8 pelis
    if(cont <= 7){
        if(typeof localStorage[i] == 'string'){
            var li = document.createElement("li");
            li.append(localStorage[i]);
            ul.append(li);
            cont= cont+1;
        }
        if(cont == 8){ alert("Ya alcansaste el MÁXIMO de pelis que se mostrarán")}
    }
    
}  

//Capturamos formulario para borar películas
var fomrulariob = document.querySelector("#formBorrarPeliculas");

//Evento de formulario para borrar películas de la lista
fomrulariob.addEventListener('submit', ()=>{
    var titulo = document.querySelector("#borrarPelicula").value;
    if(titulo.length >0){
        localStorage.removeItem(titulo);
    }else{
        alert("Película no encontrada");
    }

});