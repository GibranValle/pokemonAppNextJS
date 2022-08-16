import { Link, Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image';
import React from 'react'
import NextLink from 'next/link'

export const Navbar = () => {
    const { theme } = useTheme()

    return (
        <nav style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '5px 20px',
            backgroundColor: theme?.colors.gray50.value
        }}>
            <Image src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'}
             alt='' width={70} height={70}/>

            <NextLink href={'/'}>
                <Link>
                    <Text color='white' h2 style={{ lineHeight: '45px' }}>P</Text>
                    <Text color='white' h3>okemon</Text>
                </Link>
            </NextLink>

            <Spacer css={{ flex: 1 }} />

            <NextLink href={'/favs'}>
                <Link>
                    <Text color='white' h4>Favourites</Text>
                </Link>
            </NextLink>

        </nav>
    )
}
