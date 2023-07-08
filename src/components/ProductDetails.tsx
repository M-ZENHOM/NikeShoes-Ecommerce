
import type { FC } from 'react'
import type { ProductData } from "~/Types";
import { useAppDispatch } from "~/store/hooks";
import { ADD_TO_CART } from "~/store/slices/cart";
import { notifyMsg } from "~/lib/utils";
import { IoCartOutline } from 'react-icons/io5';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';



const ProductDetails: FC<ProductData> = ({ data }) => {
    const dispatch = useAppDispatch()

    return (
        <div className="space-y-3 max-w-[600px] w-full md:text-center mx-auto md:mt-10 md:px-10">
            <h2 className="font-bold text-2xl">{data.title}</h2>
            <h4 className="text-xl">{data.category}</h4>
            <div className='space-y-2'>
                <span className="font-bold">Price:{data.price}$</span>
                <div className="font-bold">Quantity: {data.quantity}</div>
                <h6 className="text-[#979490]">incl. of taxes </h6>
                <h6 className="text-[#979490]">
                    (Also includes all applicable duties)
                </h6>
            </div>
            <div>
                <div className="text-lg font-bold mb-5">Product Details</div>
                <div className="text-md mb-5">
                    <p>{data.description}</p>
                </div>
            </div>
            <button
                onClick={() =>
                    dispatch(ADD_TO_CART(data)) && notifyMsg("Added, Go check your cart now!")
                }
                className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
            >
                Add To cart
            </button>
            <Link href="/products"

                className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10"
            >
                Continue Shopping
                <IoCartOutline size={20} />
                <ToastContainer />
            </Link>

        </div>
    )
}

export default ProductDetails


