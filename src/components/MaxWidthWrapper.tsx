import type { ReactNode } from "react";

export default function MaxWidthWrapper({
    className,
    children,
}: {
    className?: string | undefined;
    children: ReactNode;
}) {
    return (
        <div
            className={`mx-auto w-full max-w-[1360px] px-2.5 md:px-4 z-50 ${className}`}
        >
            {children}
        </div>
    );
}