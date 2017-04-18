		// <div class="contenedor">
		// 	<div class="caja" id="rosa"></div>
		// 	<div class="caja" id="azul"></div>
		// 	<div class="caja" id="verde"></div>
		// 	<div class="caja" id="amarillo"></div>
		// </div>
var contenedor = document.getElementsByClassName("contenedor")[0];
var rosa = document.getElementById("rosa");
var azul = document.getElementById("azul");
var verde = document.getElementById("verde");
var amarillo = document.getElementById("amarillo");

contenedor.style.position = "relative";
contenedor.style.background = "DarkGray";
contenedor.style.width = "600px";
contenedor.style.padding = "50px";

azul.style.position = "absolute";
azul.style.top = "250px";
azul.style.right = "0";