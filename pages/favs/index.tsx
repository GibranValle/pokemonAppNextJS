import { NextPage } from 'next'
import { Layout } from '../../components/layouts/Layout';
import NoFavourites from '../../components/ui/NoFavourites';
import { useEffect, useState } from 'react';
import { getFavourites } from '../../utils';
import { PokeFavourites } from '../../components/pokemon';

const Favourites: NextPage = () => {
    const [favsPokemons, setFavsPokemons] = useState<number[]>([])
    useEffect(() => { setFavsPokemons(getFavourites()) }, [])
    return (
        <Layout>
            {favsPokemons.length === 0 ? <NoFavourites /> : <PokeFavourites pokemons={favsPokemons} />}
        </Layout>
    )
}

export default Favourites