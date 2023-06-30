import type { FC } from 'react'
import Image from "next/image";
import { BsTrash3 } from "react-icons/bs";
import type { ProductType } from "~/Types";
import { useAppDispatch } from "~/store/hooks";
import { DELETE_FROM_CART, DecreaseQuantity, IncreaseQuantity } from "~/store/slices/cart";


interface CartItemsProps {
    data: ProductType[]
}

const CartItems: FC<CartItemsProps> = ({ data }) => {
    const dispatch = useAppDispatch()
    return <>
        {data.map((shoes) => (
            <div
                key={shoes.id}
                className="flex items-center w-[800px] md:w-full justify-between py-4 md:flex-col border-b-[1px]"
            >
                <div className="flex md:flex-col w-full md:text-center h-full justify-between items-center">
                    <Image
                        src={shoes.thumbnail}
                        width={120}
                        height={120}
                        className="mr-5"
                        alt={shoes.title}
                        priority
                    />
                    <div className="flex flex-col ">
                        <div className="flex flex-col ">
                            <h2 className="font-bold text-2xl md:text-xl md:mt-3">
                                {shoes.title}
                            </h2>
                            <span className="text-[#6d6d6d]">{shoes.category}</span>
                        </div>
                        <div className="flex space-x-8 mt-5 text-[#6d6d6d]">
                            <div className="flex items-center">
                                <div className="font-bold">Sizes:</div>
                                <select>
                                    <option value="UK-10.5">UK-10.5</option>
                                    <option value="UK-11.5">UK-11.5</option>
                                </select>
                            </div>
                            <div className="flex items-center">
                                <div className="font-bold ">Quantity:</div>
                                <div className="flex justify-center items-center space-x-3 ml-2 bg-black text-white p-1 px-2 rounded-md">
                                    <span
                                        onClick={() =>
                                            dispatch(IncreaseQuantity({ id: shoes.id }))
                                        }
                                        className="text-center cursor-pointer  w-[25px] text-xl hover:bg-[#6d6d6d] hover:rounded-full transition-all duration-500"
                                    >
                                        +
                                    </span>
                                    <p>{shoes.quantity}</p>
                                    <div
                                        onClick={() =>
                                            dispatch(DecreaseQuantity({ id: shoes.id }))
                                        }
                                        className="text-center cursor-pointer  w-[25px] text-xl hover:bg-[#6d6d6d] hover:rounded-full transition-all duration-500"
                                    >
                                        -
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:h-full w-full md:mt-5  justify-between h-[90px] items-end text-[#6d6d6d]">
                        <h2 className="font-bold">Price : {shoes.price}$</h2>
                        <BsTrash3
                            onClick={() => dispatch(DELETE_FROM_CART({ id: shoes.id }))}
                            className="text-xl cursor-pointer hover:text-black"
                        />
                    </div>
                </div>
            </div>
        ))}
    </>
}

export default CartItems
