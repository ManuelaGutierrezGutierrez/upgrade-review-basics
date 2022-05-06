// **Iteración #1: Mix for e includes**

// Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías.
// Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función **.includes()**

const movies = [
	{ title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },

	{ title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },

	{
		title: "Solo en Whatsapp",
		duration: 223,
		categories: ["comedia", "thriller"],
	},

	{
		title: "El gato con guantes",
		duration: 111,
		categories: ["comedia", "aventura", "animación"],
	},
];

let newArray = [];

for (let item of movies) {
	// console.log(movies);  Entro en el objeto
	for (let movie of item.categories) {
		// console.log(movie); Entro en categories dentro del objeto. Si el nuevoArray no contiene, se hace push
		if (!newArray.includes(movie)) {
			newArray.push(movie);
		}
	}
}

console.log(newArray);
