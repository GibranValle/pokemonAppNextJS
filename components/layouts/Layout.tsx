import Head from "next/head"
import { FC } from 'react'

import { Navbar } from './../ui';

interface Props {
    children?: JSX.Element,
    title?: string,
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Gibran Valle"></meta>
                <meta name="description" content="Pokemon information XXX"></meta>
                <meta name="keywords" content="XXX, Pokemon, Pokedex"></meta>
                <meta property="og:title" content="Pokemon App" />
                <meta property="og:description" content={`Information about ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            <Navbar />

            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    )
}
