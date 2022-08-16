import { pokeApi } from '../pages/api'
import { FullPokemon } from '../interfaces'

export const getPokemonInfo = async (nameOrId: string) => {
  const { data } = await pokeApi.get<FullPokemon>(`/pokemon/${nameOrId}`)
  const pokemon = {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  }
  return pokemon
}
