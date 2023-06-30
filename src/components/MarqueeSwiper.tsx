import { FC } from 'react'
import { SiArgos, SiArkecosystem, SiApostrophe, SiAral, SiAsciidoctor, SiAtandt, SiBigbasket, SiCoil, SiFfmpeg } from 'react-icons/si'
import Icon from './Icon';
import Marquee from 'react-fast-marquee';

interface MarqueeSwiperProps {

}

const MarqueeSwiper: FC<MarqueeSwiperProps> = ({ }) => {
    return (
        <Marquee pauseOnHover={true} speed={70} className='bg-base-300 rounded-xl bg-opacity-30 my-10'>
            <Icon Icon={<SiArgos />} Name="" Color="text-black" />
            <Icon Icon={<SiArkecosystem />} Name="" Color="text-[#1e88e5]" />
            <Icon Icon={<SiApostrophe />} Name="" Color="text-[#633194]" />
            <Icon Icon={<SiAral />} Name="" Color="text-yellow-500" />
            <Icon Icon={<SiAsciidoctor />} Name="" Color="text-[#e54c21]" />
            <Icon Icon={<SiAtandt />} Name="" Color="text-blue-800" />
            <Icon Icon={<SiBigbasket />} Name="" Color="text-[#c76494]" />
            <Icon Icon={<SiCoil />} Name="" Color="text-[#44a6ad] " />
            <Icon Icon={<SiFfmpeg />} Name="" Color="text-[#cc7ebe]" />
        </Marquee>
    )
}

export default MarqueeSwiper


