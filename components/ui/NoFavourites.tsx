import { Container, Text } from "@nextui-org/react";
import { NextPage } from "next";
import Image from "next/image";

const NoFavourites: NextPage = () => {
    return (
        <Container css={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '91vh'
        }}>
            <Text h1>No Favourites</Text>
            <Image src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'}
                alt={'name'} width={250} height={250} style={{ opacity: '0.25' }} />
        </Container>
    )
}

export default NoFavourites