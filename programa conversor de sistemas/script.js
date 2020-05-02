/**
funcion encaragada de toda la conversion entre los cuatro sistemas
dec - decimal
bin - binario
oct - octal
hex - hexadecimal
*/
function conversor(inicial,final, cadena) {
	var indice=0;
	var num=0;

	if (inicial=="bin" && final=="dec") {
		for (var i = cadena.length - 1; i >= 0; i--) {
			num += cadena[i]*Math.pow(2,indice);
			indice++;
		}

	}
	else if (inicial=="bin" && final=="oct") {

	}
	else if (inicial=="bin" && final=="hex") {

	}


	if (inicial=="oct" && final=="dec") {

	}
	else if (inicial=="oct" && final=="bin") {

	}
	else if (inicial=="oct" && final=="hex") {

	}


	if (inicial=="dec" && final=="bin") {

	}
	else if (inicial=="dec" && final=="oct") {

	}
	else if (inicial=="dec" && final=="hex") {

	}


	if (inicial=="hex" && final=="bin") {

	}
	else if (inicial=="hex" && final=="oct") {

	}
	else if (inicial=="hex" && final=="dec") {

	}

	return num;
}


//variables de prueba, estos datos los ingresa el usuario
var sisInicial = "bin";
var sisFinal = "dec";
var cad="1010";


conversor(sisInicial,sisFinal,cad);

console.log(conversor(sisInicial,sisFinal,cad));
