import type { FC } from 'react'
import { SiNike } from 'react-icons/si'
import Link from "next/link"
import { useAppSelector } from "~/store/hooks";
import type { ProductType, User } from "~/Types";
import MaxWidthWrapper from "../MaxWidthWrapper";
import React from 'react';
import UserData from '~/utils/UserData';



const Navbar: FC = () => {
    const cart = useAppSelector((state) => state.cart);
    const totalPrice = cart.reduce((acc: number, product: ProductType) => {
        acc += product.price * product.quantity;
        return acc;
    }, 0);

    return (
        <div className="navbar bg-base-100 sticky top-0 z-50">
            <MaxWidthWrapper >
                <div className="flex-1 items-center  flex space-x-10 md:space-x-5">
                    <Link href="/" className="normal-case text-5xl"><SiNike /></Link>
                    <Link href='/' className='text-xl font-bold'>Home</Link>
                    <Link href='/products' className=' text-xl font-bold'>Products</Link>
                </div>
                <div className="flex items-center">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{cart.length}</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">{cart.length} Items</span>
                                <span className="text-info">Subtotal: {totalPrice}$</span>
                                <div className="card-actions">
                                    <Link href="/cart" className="btn btn-primary btn-block">View cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <UserData />
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default Navbar

