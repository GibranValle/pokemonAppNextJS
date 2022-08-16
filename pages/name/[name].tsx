import { NextPage } from "next";
import { Layout } from "../../components/layouts";
import { GetStaticPaths, GetStaticProps } from 'next'
import { pokeApi } from "../api";
import { FullPokemon } from "../../interfaces";
import { PokemonList } from './../../interfaces/pokemon-list';
import { PokemonDetails } from "../../components/pokemon";
import { getPokemonInfo } from "../../utils";

interface Props {
    pokemon: FullPokemon
}

const PokemonPageName: NextPage<Props> = ({ pokemon }) => {
    return (
        <Layout title={pokemon.name}>
            <PokemonDetails pokemon={pokemon} />
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const response = await pokeApi.get<PokemonList>('/pokemon?limit=151')
    const { results } = response.data
    const paths = results.map(({ name }: { name: string }) => ({ params: { name } }))
    return { paths, fallback: "blocking" }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { name } = params as { name: string }
    const pokemon = await getPokemonInfo(name)
    if (!pokemon) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    return { props: { pokemon } }
}

export default PokemonPageName