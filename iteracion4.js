// **Iteración #4: Métodos findArrayIndex**

// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto
//y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

// Sugerencia de función:

// function findArrayIndex(array, text) {}

// Ej array:

// ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex(array, text) {
	for (let item of array) {
		if (item === text) {
			return array.indexOf(item);
		}
	}
}

const beersStyles = ["keller", "stout", "rauch", "bock"];
const beer = "rauch";

console.log(findArrayIndex(beersStyles, beer));
