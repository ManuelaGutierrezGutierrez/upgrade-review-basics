// **Iteración #2: Mix Fors**

// Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
	{
		name: "Manolo el del bombo",
		favoritesSounds: {
			waves: { format: "mp3", volume: 50 },
			rain: { format: "ogg", volume: 60 },
			firecamp: { format: "mp3", volume: 80 },
		},
	},
	{
		name: "Mortadelo",
		favoritesSounds: {
			waves: { format: "mp3", volume: 30 },
			shower: { format: "ogg", volume: 55 },
			train: { format: "mp3", volume: 60 },
		},
	},
	{
		name: "Super Lopez",
		favoritesSounds: {
			shower: { format: "mp3", volume: 50 },
			train: { format: "ogg", volume: 60 },
			firecamp: { format: "mp3", volume: 80 },
		},
	},
	{
		name: "El culebra",
		favoritesSounds: {
			waves: { format: "mp3", volume: 67 },
			wind: { format: "ogg", volume: 35 },
			firecamp: { format: "mp3", volume: 60 },
		},
	},
];

//Variables para acumular la suma total de los volume y el número total de vueltas

let sumVolume = null;
let counter = null;

//Bucle para entrar al array

for (let user of users) {
	// console.log(user);

	//Bucle para entrar en la propiedad del objeto. Y después en volumen y extraer.

	for (let key in user.favoritesSounds) {
		// console.log("key = ", key);
		let volume = user.favoritesSounds[key].volume;
		sumVolume += volume;
		counter += 1;
		// console.log(sumVolum);
		// console.log(counter);
	}
}

//Usar las variables de acumular para el cálculo

let averageVolume = sumVolume / counter;
console.log(averageVolume);
