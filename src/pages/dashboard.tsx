import axios from 'axios'
import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import UploadBtn from '~/components/UploadButton'


export type Product = {
    id: number,
    title: string,
    description: string,
    price: number,
    category: string,
}
const Dashborad: NextPage = () => {
    const { data: session, status } = useSession()
    const router = useRouter();
    const date = new Date();
    const [addError, setAddError] = useState<string>('');
    const [uploadError, setUploadError] = useState<string | undefined>();
    const [thumbnail, setThumbnail] = useState<string | undefined>()
    const [product, setProduct] = useState<Product>({
        id: date.getMilliseconds(),
        title: "",
        description: "",
        price: 0,
        category: "",
    })
    const { title, id, description, price, category } = product
    const [images, setImages] = useState<string[] | undefined>()


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };
    const addProduct = async (e: React.FormEvent): Promise<void> => {
        try {
            e.preventDefault();
            if (title !== '' && description !== '' && category !== '' && price !== 0 && thumbnail !== '' && id !== 0) {
                setAddError('');
                await axios.post('/api/products', {
                    id,
                    title,
                    description,
                    category,
                    price,
                    thumbnail,
                    images,
                });
                router.push('/');
            } else {
                setAddError('Complete empty inputs first.');
            }
        } catch (error) {
            console.log('An error occurred:', error);
        }
    };
    if (status === "unauthenticated") {
        router.push('/auth/signin')
    }
    if (session) {
        return (
            <div className='my-5'>
                <h2 className="text-4xl font-bold">Dashboard</h2>
                <form className='w-full mx-auto flex flex-col  border p-24 md:p-8 space-y-5 my-10'>
                    <h2 className="text-2xl font-bold">Add new product:</h2>
                    <div className='flex justify-between items-center w-full max-w-2xl md:flex-col md:items-start'>
                        <div className="w-full max-w-xl">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input onChange={handleInputChange} defaultValue={product.title} type="text" name="title" placeholder="Title" className="input input-bordered  w-full max-w-xs " />
                        </div>
                        <div className="w-full max-w-xl">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input onChange={handleInputChange} defaultValue={product.description} name="description" type="text" placeholder="Description" className="input input-bordered  w-full max-w-xs" />
                        </div>
                    </div>
                    <div className='flex justify-between items-center w-full max-w-2xl md:flex-col md:items-start'>
                        <div className="w-full max-w-xl">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select onChange={handleInputChange} defaultValue={product.category} name="category" className="select select-bordered w-full max-w-xs">
                                <option defaultChecked>Choose Product Category</option>
                                <option>Men's Shoes</option>
                                <option>Men's Basketball Shoes</option>
                            </select>
                        </div>
                        <div className="w-full max-w-xl">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input onChange={handleInputChange} defaultValue={product.price} type="text" name="price" placeholder="Price" className="input input-bordered  w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="w-full max-w-xl ">
                        <label className="label">
                            <span className="label-text">Product Image</span>
                        </label>
                        <UploadBtn setThumbnail={setThumbnail} setUploadError={setUploadError} setImages={setImages} />
                        {thumbnail &&
                            <p className='text-green-700 my-5'>Upload Complete!</p>}
                        {uploadError &&
                            <p className='text-red-700 my-5'>{uploadError}</p>
                        }
                    </div>

                    <button onClick={addProduct} className="btn btn-outline  w-full max-w-xl my-5">Add Product</button>
                    <span className='text-red-700'>{addError}</span>

                </form>
            </div>
        )
    }
}

export default Dashborad