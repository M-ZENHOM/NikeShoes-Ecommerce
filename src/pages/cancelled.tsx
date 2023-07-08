import Link from 'next/link'
import type { FC } from 'react'
import SEO from '~/components/SEO'

const CancelledPage: FC = () => {
    return (
        <div className="  mx-auto py-12 px-8 text-center h-[65vh] flex justify-center items-center">
            <SEO title="Payment Cancelled" desc="See all ur cart products" />
            <div className="p-2 rounded-md bg-rose-100 w-full max-w-ZW text-rose-500 max-w-xl mx-auto space-y-10 h-[15vh] flex flex-col">
                <p className="text-lg">Ordard payment cancelled!</p>
                <Link href="/" className='bg-black text-white p-2 rounded-md' >Go to Shopping</Link>
            </div>
        </div>
    )
}

export default CancelledPage