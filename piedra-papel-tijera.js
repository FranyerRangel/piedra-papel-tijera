var piedra = 1;
var papel  = 2;
var tijera = 3;

do {
	var jugada = prompt("Seleccione su jugada:\n1.Piedra\n2.Papel\n3.Tijera");
	if (jugada < 1 || jugada > 3) {
		alert("La opción debe ser 1. 2. o 3.");
	}
} while (jugada < 1 || jugada > 3);

function play (eleccion) {
	let computer = Math.floor((Math.random() * 3) + 1);

	if (eleccion == computer) {
		document.write("<p style='color:orange;'>Resultado: Empate</p>");
	} else if ((eleccion == 1) && (computer == 3)) {
		document.write("<p style='color:green;'>Ganaste con Piedra a la Tijera</p>");
	} else if ((eleccion == 2) && (computer == 1)) {
		document.write("<p style='color:green;'>Ganaste con Papel a la Piedra</p>");
	} else if ((eleccion == 3) && (computer == 2)) {
		document.write("<p style='color:green;'>Ganaste con Tijera a Papel</p>");
	} else {
		document.write("<p style='color:red;'>Resultado: Perdiste</p>");
	}

	document.write("<p><b>Valores:</b><br>1 = Piedra<br>2 = Papel<br>3 = Tijera</p>");
	document.write("<br>Tu elección: " + eleccion);
	document.write("<br>Elección de la Inteligencia Artificial: " + computer);
}

play(jugada);