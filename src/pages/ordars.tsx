import type { NextPage } from 'next'
import React from 'react'
import SEO from '~/components/SEO'


const OrdarsPage: NextPage = () => {

    return (
        <div className='h-[65vh] flex justify-center items-center flex-col text-5xl space-y-5'>
            <SEO title="Ordars" desc="Here u can see all ur payment history" />
            <h2 className='font-bold'>Ordars</h2>
            <p className='text-3xl'>Payment Ordars Coming Soon!</p>
        </div>
    )
}

export default OrdarsPage