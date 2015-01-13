var pokeballAbierta = false;
var enPrimerPlano = "";
var desenfocado, modal;

$(document).on("ready", main);
function main(){
	//$(".parte-arriba").mouseenter(mostrarBarras).mouseleave(noMostrarBarras);	
	$( ".combates" ).on("click",function() {mostrarElemento(".pantalla-combates", false, false);});
	$( ".listas" ).on("click",function() {mostrarElemento(".pantalla-listas", false, false);});
	$( ".pokedex" ).on("click",function() {mostrarElemento(".pantalla-pokedex", false, false);});
	$( ".equipo" ).on("click",function() {mostrarElemento(".pantalla-equipo", false, false);});
	$( ".centro-centro" ).on("click",function() {
		if (pokeballAbierta) {cerrarPokeball();}
		else{abrirPokeball();}
	});
	$( ".centro-centro" ).click();
}

function abrirPokeball(){
	if (!pokeballAbierta){
		$(".parte-arriba").css('height', "4em");
		$(".parte-abajo").css('top', "100%");
		$(".menu").fadeIn();
		$(".parte-centro").removeClass("girando");
		pokeballAbierta = true;
	}
}
function cerrarPokeball(){
	if (pokeballAbierta){
		$(".parte-arriba").css('height', "calc(50% + 0.5em)");
		$(".parte-abajo").css('top', "50%");
		$(".menu").fadeOut();
		$(".parte-centro").addClass("girando");
		pokeballAbierta = false;
	}
}
function mostrarElemento(elementoMostrar, conDesenfoque, modoModal){
	/*
		if (conDesenfoque) {
			$(".pantalla-desenfoque").fadeOut();
			desenfocado = true;
		}if(modoModal){modal = true;}
		setInterval(function () {abrirPokeball();}, 3000);
		setInterval(function () {cerrarPokeball();}, 1000);
	*/
	$(enPrimerPlano).fadeOut();
	$(elementoMostrar).fadeIn();
	enPrimerPlano = elementoMostrar;
}
function ocultarTodo(){
	if (desenfocado) {
		$(".pantalla-desenfoque").fadeIn();
		desenfocado = false;
	}if (modoModa) {modal = false;}

	$(enPrimerPlano).fadeOut();
	enPrimerPlano = "";
}