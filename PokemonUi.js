class PokemonUi {
	constructor(){
		this.pokemonContainer = document.getElementById('pokemon-deck');
	}
	
	displayPokemon(data, image){

		this.clearPokemon();

		console.log(image)

		console.log(data);

		const fieldset = document.createElement('fieldset');
		const legend = 	document.createElement('legend');
		const ul = document.createElement('ul');
		const img = document.createElement('img');
		img.setAttribute('src', image);

		const abilities = data.abilities.map(ability => {
			const li = document.createElement('li');
			li.textContent = ability.ability.name;

			ul.appendChild(li);
		});

		legend.textContent = data.name;
		fieldset.appendChild(legend);
		fieldset.appendChild(img);
		fieldset.appendChild(ul);

		this.pokemonContainer.appendChild(fieldset);
	}

	clearPokemon(){
		this.pokemonContainer.innerHTML = "";
	}
}