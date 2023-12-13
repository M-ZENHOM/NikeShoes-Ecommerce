import type { FC } from 'react'
import { Icons } from './Icon';
import Marquee from 'react-fast-marquee';

const MarqueeSwiper: FC = () => {
    return (
        <Marquee pauseOnHover={true} speed={70} className='bg-base-300 rounded-xl bg-opacity-30 my-10 p-4'>
            <Icons.argos className="text-black w-16 h-16 mx-20" />
            <Icons.arkecosystem className="text-[#1e88e5] w-16 h-16  mx-20" />
            <Icons.aral className="text-yellow-500 w-16 h-16  mx-20" />
            <Icons.asciidoctor className="text-[#633194] w-16 h-16  mx-20" />
            <Icons.bigbasket className="text-[#c76494] w-16 h-16  mx-20" />
            <Icons.atandt className="text-blue-800 w-16 h-16  mx-20" />
            <Icons.ffmpeg className="text-[#cc7ebe] w-16 h-16  mx-20" />
        </Marquee>
    )
}

export default MarqueeSwiper


