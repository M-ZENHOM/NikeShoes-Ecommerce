
import { type FC, useTransition } from 'react'
import type { ProductDataArr, ProductType } from '~/Types'
import { FaTrashAlt, FaRegEdit } from 'react-icons/fa'
import Image from 'next/image'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Model from './Model'
import React from 'react'
import { notifyMsg } from '~/lib/utils'
import DashboardForm from './Forms/DashboardForm'


const ProductsTable: FC<ProductDataArr> = ({ data }) => {
    const [isPending, startTransition] = useTransition()
    const [open, setOpen] = React.useState<boolean>(false)
    const router = useRouter()
    const handleDelete = (id: string) => {
        startTransition(async () => {
            await axios.delete(`/api/products/${id}`);
            router.refresh()
        })
    }
    const handleUpdate = (id: string, title: string, description: string, price: number, category: string, images: string[], thumbnail: string, sizes: string[], size: string, userId: string, quantity: number) => {
        startTransition(async () => {
            await axios.put(`/api/products/${id}`, { title, description, price, category, images, thumbnail, size, sizes, userId, quantity });
            router.push(`/product/${id}`)
            notifyMsg("Shoes Updated Succesfully!")
        })
    }
    return (
        <>
            {data.length === 0 ?
                (
                    <div className='flex flex-col space-y-8 md:text-center   items-center'>
                        <h2 className='text-xl my-5 font-bold'>No shoes have been added,Try to add one.</h2>
                        <DashboardForm />
                    </div>
                )
                : (
                    <div className="overflow-x-auto">
                        <h2 className='text-xl my-5 font-bold'>Your shoes</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Category</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((shoe) => (
                                    <tr key={shoe._id}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill priority src={shoe.thumbnail} alt={shoe.title} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{shoe.title}</div>
                                                    <div className="text-sm opacity-50">{shoe.description.slice(0, 18)}...</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge badge-ghost badge-sm">{shoe.price}$</span>
                                        </td>
                                        <td>{shoe.category}</td>
                                        <th>
                                            <div className='flex space-x-5  justify-between items-center text-xl w-full max-w-[50px] mr-2 '>
                                                <button onClick={() => handleDelete(shoe._id)} className='text-black hover:scale-110' disabled={isPending}><FaTrashAlt /></button>
                                                <div onClick={() => setOpen(true)} className='text-black hover:scale-110 cursor-pointer'><FaRegEdit /></div>
                                            </div>
                                            <Model handleUpdate={handleUpdate} shoe={shoe} open={open} setOpen={setOpen} />
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
        </>

    )
}

export default ProductsTable

