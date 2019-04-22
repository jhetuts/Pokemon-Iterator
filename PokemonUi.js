class PokemonUi {
	constructor(){
		this.pokemonContainer = document.getElementById('pokemon-deck');
	}
	
	displayPokemon(data){

		this.clearPokemon();

		const fieldset = document.createElement('fieldset');
		const legend = 	document.createElement('legend');
		const ul = document.createElement('ul');

		const abilities = data.abilities.map(ability => {
			const li = document.createElement('li');
			li.textContent = ability.ability.name;

			ul.appendChild(li);
		});

		legend.textContent = data.name;
		fieldset.appendChild(legend);
		fieldset.appendChild(ul);

		this.pokemonContainer.appendChild(fieldset);
	}

	clearPokemon(){
		this.pokemonContainer.innerHTML = "";
	}
}