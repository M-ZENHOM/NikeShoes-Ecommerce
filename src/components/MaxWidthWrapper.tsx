import { FC } from 'react'
import type { ReactNode } from "react";


interface MaxWidthWrapperProps {
    children: ReactNode
    className?: string
}

const MaxWidthWrapper: FC<MaxWidthWrapperProps> = ({ children, className }) => {
    return <div
        className={`mx-auto w-full max-w-[1360px] px-2.5 md:px-4 z-50 ${className}`}
    >
        {children}
    </div>
}

export default MaxWidthWrapper