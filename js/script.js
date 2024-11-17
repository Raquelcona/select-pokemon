const selectElement = document.getElementById('pokemon-select');
const getPokemonButton = document.getElementById('get-pokemon');
const pokemonInfo = document.querySelector('.pokemon-info');

getPokemonButton.addEventListener("click", () => {
  fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((response) => {
    if(!response.ok) {
      throw new Error("La solicitud no fue exitosa");
    }
    return response.json();
  })
  .then((data) => {
    pokemonInfo.innerText = data.value;
    })
    .catch((error) => {
      pokemon.Info.innerText = "error: no se pudo obtener la información";
    });
});