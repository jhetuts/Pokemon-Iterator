class PokemonUi {
	constructor(){
		this.pokemonContainer = document.getElementById('pokemon-deck');
	}
	
	displayPokemon(data, image){

		this.clearPokemon();

		// Name
		const fieldset = document.createElement('fieldset');
		const legend = 	document.createElement('legend');

		// Image
		const imgWrapper = document.createElement('div');
		const img = document.createElement('img');
		img.setAttribute('src', image);
		imgWrapper.appendChild(img);
		imgWrapper.className = 'image-wrap'

		// Abilities
		const abilityTitle = document.createElement('h2');
		abilityTitle.textContent = 'Abilities: ';
		const ul = document.createElement('ul');
		const abilities = data.abilities.map(ability => {
			const li = document.createElement('li');
			li.textContent = ability.ability.name;

			ul.appendChild(li);
		});

		legend.textContent = data.name;
		fieldset.appendChild(legend);
		fieldset.appendChild(imgWrapper);
		fieldset.appendChild(abilityTitle);
		fieldset.appendChild(ul);

		this.pokemonContainer.appendChild(fieldset);
	}

	clearPokemon(){
		this.pokemonContainer.innerHTML = "";
	}
}