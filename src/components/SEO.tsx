import { FC } from 'react'
import Head from 'next/head'
import React from 'react'


interface SEOProps {
    title: string
    desc: string
}

const SEO: FC<SEOProps> = ({ title, desc }) => {
    return (
        <Head>
            <title>{"Nike Store - " + title}</title>
            <meta name="description" content={desc} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default SEO

