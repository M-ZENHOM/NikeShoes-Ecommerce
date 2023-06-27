import Head from 'next/head'
import React from 'react'

const SEO = ({ title, desc }: { title: string, desc: string }) => {
    return (
        <Head>
            <title>{"Nike Store - " + title}</title>
            <meta name="description" content={desc} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default SEO