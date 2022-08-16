import { NextPage } from "next";
import { Grid } from '@nextui-org/react';
import { useRouter } from "next/router";
import { PokeFavouriteCard } from "./PokeFavouriteCard";

interface Props {
    pokemons: number[]
}

const PokeFavourites: NextPage<Props> = ({ pokemons }) => {
    const router = useRouter()
    const onClick = (id: number) => {
        router.push(`/pokemon/${id}`)
    }
    return (
        <Grid.Container gap={2} direction='row' justify='flex-start'>
            {pokemons.map(id => (
                <PokeFavouriteCard id={id} handleClick={onClick} key={id} />
            ))}
        </Grid.Container>
    )
}

export { PokeFavourites }