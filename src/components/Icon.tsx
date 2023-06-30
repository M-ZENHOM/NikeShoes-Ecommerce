import { FC } from 'react'

interface IconProps {
    Icon: JSX.Element
    Name: string
    Color: string
}

const Icon: FC<IconProps> = ({ Icon, Color, Name }) => {
    return <div className="w-[150px] py-2  my-3 flex flex-col items-center justify-center  hover:bg-base-100 hover:bg-opacity-70  hover:shadow-sm   transition-all duration-300 ">
        <div className={`text-5xl ${Color}`}>
            {Icon}
        </div>
        <div className="stat-value font-normal text-[18px] ">{Name}</div>
    </div>
}

export default Icon







