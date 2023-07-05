
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { type FC } from 'react'
import UploadBtn from '../UploadButton';
import { CustomInput } from '../CustomInput';
import { Formik, Form } from "formik";
import { ProductSchema } from '~/lib/validations/ProductPost';
import { CustomSelect, CustomSelectSize } from '../CustomSelect';
import { useSession } from 'next-auth/react';
import { sizes } from '~/config/products';



type formData = {
    title: string
    price: number
    quantity: number
    description: string
    category: string
    size: string
}
const DashboardForm: FC = () => {
    const router = useRouter()
    const [isPending, startTransition] = React.useTransition()
    const [uploadError, setUploadError] = React.useState<string | undefined>();
    const [thumbnail, setThumbnail] = React.useState<string | undefined>()
    const [images, setImages] = React.useState<string[] | undefined>()
    const id = new Date().getMilliseconds();
    const { data: session } = useSession();
    const userId = session?.user.id;


    const submitHanlder = (values: formData, actions: any) => {
        const { title, category, description, price, quantity, size } = values
        !thumbnail && !images ?
            setUploadError("Upload image frist!") :
            startTransition(async () => {
                setUploadError('')
                await axios.post('/api/products', {
                    title,
                    category,
                    description,
                    price,
                    quantity,
                    thumbnail,
                    images,
                    size,
                    id,
                    sizes,
                    userId,
                });
                actions.resetForm();
                router.push('/products')
            })
    }


    return (
        <Formik
            initialValues={{
                title: "",
                price: 1,
                description: "",
                category: "Men's Shoes",
                quantity: 1,
                size: "UK-10.5"
            }}
            validationSchema={ProductSchema}
            onSubmit={submitHanlder}
        >
            {(props) => (
                <Form className='flex flex-col justify-center items-center space-y-5 w-full mx-auto'>
                    <CustomInput label="Title" id="title" name="title" type="text" placeholder="Enter your title" />
                    <CustomInput label="Description" id="description" name="description" type="text" placeholder="Enter your description" />
                    <CustomSelect label="Category" id="category" name="category" type="text" placeholder="Enter your category" />
                    <CustomSelectSize label="Size" id="size" name="size" type="text" placeholder="Enter your Size" />
                    <CustomInput disabled label="Quantity" id="quantity" name="quantity" type="number" placeholder="Enter your quantity" />
                    <CustomInput label="Price" id="price" name="price" type="number" placeholder="Enter your price" />
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
                    <button aria-label="contactButton" type='submit' disabled={isPending} className="btn btn-outline w-full max-w-xl">
                        {isPending ? "Sending..." : " Send ->"}
                    </button>
                </Form>
            )}
        </Formik>

    )
}

export default DashboardForm

