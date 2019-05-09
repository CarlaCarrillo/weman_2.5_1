//Esta variable guarda una referencia al control de resultado, se declara global para no tener que estar ejecutando document.getElementById en cada ocasión que se necesite
let ctrlMostrado = document.getElementById('salida');

function dibujaTarjetas(arreglo) {
	let imprime = "<table id='registro'><tr><th>Habitación</th><th>Huesped</th></tr>";
	for (let i = 0; i < arreglo.length; i++) {
		imprime += "<tr><td>" + arreglo[i].numHabitacion + "</td><td>" + arreglo[i].nombreHuesped + "</td></tr>";
	}
	imprime += "</table>"
	ctrlMostrado.innerHTML = imprime;
}

function ordenaPorHabitacion(arreglo) {
	//ordena los numero de habitación
	console.log(registro.sort(function (ant, sig) {
		//especificamos la propiedad a ordenar
		if (ant.numHabitacion > sig.numHabitacion) {
			return 1;
		}
		if (ant.numHabitacion < sig.numHabitacion) {
			return -1;
		}
		return 0;
	}));
	//con esto "dibujarTarjetas" se imprimen
	dibujaTarjetas(registro); 
}

function ordenaPorHuesped(arreglo) {
	//trae (imprime) la info de 'registro" ya ordenada
	console.log(registro.sort(function (ant, sig) {
		//se tiene que establecer la propiedad a ordenar
		if (ant.nombreHuesped > sig.nombreHuesped) {
			return 1;
		}
		if (ant.nombreHuesped < sig.nombreHuesped) {
			return -1;
		}
		return 0;
	}));
	dibujaTarjetas(registro);
}

//con esta función guardamos la información
function guardar(){ 
    var _habit = document.getElementById("habitacion").value;
    var _huesp = document.getElementById("huesped").value;
    // los muestra en la tabla... esta creando otra tabla?
    var fila="<tr><td>"+_habit+"</td><td>"+_huesp +"</td></tr>";
    // var _nuevoregistro = {numHabitacion:"110",...}  
    
    var btn = document.createElement("TR");
    var nuevohuesped = {numHabitacion:_habit, nombreHuesped:_huesp};
    btn.innerHTML=fila;
    document.getElementById("registro").appendChild(btn);
    registro.push(nuevohuesped);  
}