// [query] dynamic query param
import { GetStaticProps, GetStaticPaths, NextPage } from "next";

import { Layout } from "../../components/layouts";
import { PokemonDetails } from "../../components/pokemon";
import { FullPokemon } from "../../interfaces";
import { getPokemonInfo } from "../../utils";
import pokeApi from './../api/pokeApi';


interface Props {
    pokemon: FullPokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
    return (
        <Layout title={pokemon.name}>
            <PokemonDetails pokemon={pokemon} />
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    // paths: { params: {id: '1'}}
    const paths = [...Array(151)].map((value, idx) => ({ params: { id: `${idx + 1}` } }))
    return { paths, fallback: "blocking" }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params as { id: string }
    const pokemon = await getPokemonInfo(id)
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


export default PokemonPage