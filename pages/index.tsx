import { Button, Card, Grid, Row, Text } from '@nextui-org/react'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { pokeApi } from './api';
import { Layout } from './../components/layouts/Layout';
import { PokemonList, singlePokemon } from '../interfaces';
import { PokemonGrid } from '../components/pokemon'


interface Props {
  pokemons: singlePokemon[];
}

// 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Poketest' >
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map(pokemon => (
          <PokemonGrid key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonList>('/pokemon?limit=151')
  const pokemons: singlePokemon[] = data.results.map((pokemon, idx) => ({
    id: idx + 1, name: pokemon.name, url: pokemon.url,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idx + 1}.svg`
  }))

  return {
    props: { pokemons }
  }
}

export default Home
