
import type { FC, Dispatch, SetStateAction } from 'react'
import React from 'react'
import type { ProductType } from '~/Types'

interface ModelProps {
    shoe: ProductType
    setOpen: Dispatch<SetStateAction<boolean>>
    open: boolean
}

const Model: FC<ModelProps> = ({ setOpen, open }) => {

    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                e.preventDefault()
                setOpen(false)
            }
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [])

    return (
        <dialog id="updateModel" className={`${open ? " modal modal-open" : "modal"} `}>
            <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setOpen(false)}>✕</button>
                <p className="py-4 text-center">Update Coming Soon <br /> Press ESC key or click on ✕ button to close</p>
            </form>
        </dialog>

    )
}

export default Model