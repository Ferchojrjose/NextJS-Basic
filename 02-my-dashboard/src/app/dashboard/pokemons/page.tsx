import { PokemonGrid, PokemonsResponse, SimplePokemons } from "@/pokemons";


export const metadata = {
    title: 'Listado de Pokémons',
    description: 'Listado de Pokémons',
};


// Función que obtiene los pokémons de la API
const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemons[]> => {

    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
        .then(res => res.json());

    const pokemons = data.results.map((pokemon) => {
        return {
            id: pokemon.url.split('/').at(-2)!,
            name: pokemon.name,
        }
    });

    return pokemons;

}


export default async function PokemonsPage() {

    const pokemons = await getPokemons(151);

    return (
        <div className="flex flex-col">

            <span className="text-5xl my-2">Listado de Pokémons <small>estático</small></span>

            <PokemonGrid pokemons={pokemons} />

        </div>
    );
}