import { NextPage } from "next";
import { Card, Grid } from '@nextui-org/react';

interface Props {
    id: number,
    handleClick(id: number): void
}

const PokeFavouriteCard: NextPage<Props> = ({ id, handleClick }) => {
    const onClick = () => {
        handleClick(id)
    }
    return (
        <Grid key={id} xs={6} sm={4} md={2} xl={1}>
            <Card isHoverable isPressable css={{ p: 10 }} onClick={onClick}>
                <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} />
            </Card>
        </Grid>
    )
}

export { PokeFavouriteCard }