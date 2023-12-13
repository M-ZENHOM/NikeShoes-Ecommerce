import type { FC, Dispatch, SetStateAction } from 'react'
import React from 'react'
import type { ProductType } from '~/Types'
import { CustomInput } from './CustomInput'
import { Form, Formik } from 'formik'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { notifyMsg } from '~/lib/utils'


interface ModelProps {
    shoe: ProductType
    setOpen: Dispatch<SetStateAction<boolean>>
    open: boolean
}

type FormDataType = {
    title: string
    price: number
    description: string
}

const Model: FC<ModelProps> = ({ setOpen, open, shoe }) => {
    const router = useRouter()
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            e.preventDefault()
            setOpen(false)
        }
    }
    React.useEffect(() => {
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [])

    const submitHanlder = async (values: FormDataType, actions: { resetForm: () => void; }) => {
        await axios.patch(`/api/products/${shoe._id}`, { ...values });
        router.push(`/product/${shoe._id}`)
        notifyMsg("success", "Shoes Updated Succesfully!")
        actions.resetForm();
    }

    return (
        <dialog id="updateModel" className={`${open ? " modal modal-open" : "modal"} `}>
            <Formik
                initialValues={{
                    title: shoe.title,
                    price: shoe.price,
                    description: shoe.description,
                }}
                onSubmit={submitHanlder}>
                {(props) => (
                    <Form className=' modal-box flex flex-col justify-center items-center space-y-5 w-full mx-auto '>
                        <CustomInput label="Title" id="title" name="title" type="text" placeholder="Enter your title" />
                        <CustomInput label="Description" id="description" name="description" type="text" placeholder="Enter your description" />
                        <CustomInput label="Price" id="price" name="price" type="number" placeholder="Enter your price" />
                        <button aria-label="contactButton" type='submit' className="btn btn-outline w-full max-w-xl">
                            Update
                        </button>
                    </Form>
                )}
            </Formik>
        </dialog>

    )
}

export default Model