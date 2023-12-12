
import type { FC, Dispatch, SetStateAction } from 'react'
import React from 'react'
import type { ProductType } from '~/Types'


interface ModelProps {
    shoe: ProductType
    setOpen: Dispatch<SetStateAction<boolean>>
    open: boolean
    handleUpdate: (id: string, title: string, description: string, price: number, category: string, images: string[], thumbnail: string, sizes: string[], size: string, userId: string, quantity: number) => void
}

const Model: FC<ModelProps> = ({ setOpen, open, handleUpdate, shoe }) => {
    const [newData, setNewData] = React.useState({
        title: shoe.title,
        description: shoe.description,
        price: shoe.price,
    });
    const { title, description, price } = newData

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewData(prevValue => ({
            ...prevValue,
            [name]: value

        }));

    }
    const updateHandler = () => {
        handleUpdate(shoe._id, title, description, price, shoe.category, shoe.images, shoe.thumbnail, shoe.sizes, shoe.size, shoe.userId, shoe.quantity)
        setOpen(false)
    }
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
            <form method="dialog" className="modal-box flex flex-col space-y-5 w-full p-8">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setOpen(false)}>✕</button>
                <input className="input input-bordered w-full max-w-md" type="text" name='title' onChange={onChange} defaultValue={shoe.title} />
                <input className="input input-bordered w-full max-w-md" type="text" name='description' onChange={onChange} defaultValue={shoe.description} />
                <input className="input input-bordered w-full max-w-md" type="text" name='price' onChange={onChange} defaultValue={shoe.price} />
                <button className="btn" onClick={() => updateHandler()}>Update</button>
            </form>
        </dialog>

    )
}

export default Model