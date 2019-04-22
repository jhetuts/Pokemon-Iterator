const httpRequest = new HttpLibrary();
const pokeUi = new PokemonUi();

const url = 'https://pokeapi.co/api/v2/pokemon/';

let id = 1;

const nextBtn = document.getElementById('next-pokemon');
const prevBtn = document.getElementById('prev-pokemon');

nextBtn.addEventListener('click', function(){
	id++;
	disabledButton(id);
	getPokemon(id);
});

prevBtn.addEventListener('click', function(e){
	id--;
	disabledButton(id);
	getPokemon(id);

});


const getPokemon = id => {
	httpRequest.get(url+id)
	.then(data => {
		pokeUi.displayPokemon(data)
		data.abilities.map(ability => {
			console.log(ability.ability.name)
			httpRequest.get(ability.ability.url)
				.then(data => {
					data.effect_entries.map(effect => {
						console.log(effect.effect);
					})
				})
		});
	})
	.catch(() => {
		console.log("No pokemon found. Restart to 1")
		setTimeout(function(){
			id = 1;
			getPokemon(id);
		}, 2000);
	});
}



const disabledButton = id => {
	if(id <= 1){
		id = 1;
		prevBtn.setAttribute('disabled', true);
	} else {
		prevBtn.removeAttribute('disabled');
	}
}



document.addEventListener('DOMContentLoaded', function(){
	disabledButton(id);
	getPokemon(id);
});