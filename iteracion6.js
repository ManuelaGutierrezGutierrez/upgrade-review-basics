// **Iteración #6: Función swap**

// Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array.
// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

// Sugerencia de array:

// ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swap(array, param1, param2) {
	let value1 = array[param1];
	let value2 = array[param2];
	array[param1] = value2;
	array[param2] = value1;

	return array;
}

const array = [
	"Mesirve",
	"Cristiano Romualdo",
	"Fernando Muralla",
	"Ronalguiño",
];

console.log(swap(array, 1, 3));
