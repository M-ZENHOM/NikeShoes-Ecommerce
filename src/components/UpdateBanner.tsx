import Image from 'next/image'
import type { FC } from 'react'
import UpdateBg from "../../public/UpdateBg.png";
import Link from 'next/link';

const ShoeBanner: FC = () => {
    return <div className='flex items-center  justify-between  md:flex-col py-24'>
        <Image src={UpdateBg} alt="update image" priority />
        <div className='flex flex-col items-start text-lg space-y-5 md:text-center md:items-center'>
            <h2 className='font-bold text-5xl md:text-3xl'>Shop the future of <br /> Fashion to stay update</h2>
            <p className='max-w-lg w-full'>Indugle in comfort and style with our range of plush furnture and cozy accents</p>
            <Link href="/products" className=' hover:bg-black transition-all duration-300 text-center p-2 max-w-xs w-full rounded-lg bg-[#6a7da0] text-white'>Shop now</Link>
        </div>
    </div>
}

export default ShoeBanner