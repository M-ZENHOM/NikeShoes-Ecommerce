

import Link from 'next/link'
import type { FC } from 'react'


const FooterAction: FC = () => {
    return (
        <div className='w-full bg-base-300 h-[30vh] my-10 flex flex-col justify-center items-center text-3xl space-y-10'>
            <h2>Go Shopping and get 25% off</h2>
            <Link href='/products' className='bg-black text-white p-4 rounded-xl w-[250px] text-center hover:bg-white hover:text-black transition-all duration-500'>Products</Link>
        </div>
    )
}

export default FooterAction