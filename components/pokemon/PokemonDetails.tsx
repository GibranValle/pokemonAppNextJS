import { useState, useEffect } from "react";
import { NextPage } from "next";

import { Button, Grid, Image, Text } from "@nextui-org/react";
import { Card } from '@nextui-org/react';
import confetti from 'canvas-confetti'

import { FullPokemon } from "../../interfaces";
import { existInFavourites, toggleLocalFavourite } from "../../utils";

interface Props {
    pokemon: FullPokemon
}

const PokemonDetails: NextPage<Props> = ({ pokemon }) => {
    const [isInFavourites, setInFavourites] = useState<boolean>(false)

    useEffect(() => {
        setInFavourites(existInFavourites(pokemon.id))
    }, [pokemon.id])

    const onClick = () => {
        toggleLocalFavourite(pokemon.id)
        setInFavourites(!isInFavourites)
        if (!isInFavourites) {
            confetti({
                zIndex: 999, particleCount: 100, spread: 160, angle: -100,
                origin: { x: 1, y: 0 }
            })
        }
    }
    return (
        <Grid.Container css={{ marginTop: '5px' }} gap={2}>
            <Grid xs={12} sm={4}>
                <Card>
                    <Card.Body>
                        <Card.Image width={'100%'} height={200}
                            src={pokemon.sprites.other?.dream_world.front_default || 'no-image.png'}
                            alt={pokemon.name} />
                    </Card.Body>
                </Card>
            </Grid>
            <Grid xs={12} sm={8}>
                <Card>
                    <Card.Header css={{ display: "flex", justifyContent: 'space-between', padding: '0 20px' }}>
                        <Text h1 transform="capitalize">{pokemon.name}</Text>
                        <Button onClick={onClick} css={{ color: isInFavourites ? '#aa0000' : 'white' }}
                            color={'gradient'} ghost={!isInFavourites}>{isInFavourites ? '❤' : 'agregar'}
                        </Button>
                    </Card.Header>
                    <Card.Body css={{ display: "flex", flexDirection: 'row', alignItems: 'center', padding: '0' }}>
                        <Image src={pokemon.sprites.front_default} alt={pokemon.name} width='100' height={100} />
                        <Image src={pokemon.sprites.back_default} alt={pokemon.name} width='100' height={100} />
                        <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width='100' height={100} />
                        <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width='100' height={100} />
                    </Card.Body>
                </Card>
            </Grid>
        </Grid.Container>
    )
}

export { PokemonDetails }