import type { FC } from 'react'
import { signIn, signOut, useSession } from "next-auth/react";
import { SiNike } from 'react-icons/si'
import Image from "next/image";
import Link from "next/link"
import { useAppSelector } from "~/store/hooks";
import type { ProductType } from "~/Types";
import MaxWidthWrapper from "../MaxWidthWrapper";



const Navbar: FC = () => {
    const cart = useAppSelector((state) => state.cart);
    const totalPrice = cart.reduce((acc: number, product: ProductType) => {
        acc += product.price * product.quantity;
        return acc;
    }, 0);
    const handleSignIn = async () => {
        try {
            await signIn();
        } catch (error) {
            // Handle sign-in error
            console.error(error);
        }
    };
    const handleSignOut = async () => {
        try {
            await signOut();
        } catch (error) {
            // Handle sign-in error
            console.error(error);
        }
    };

    const { data: session } = useSession();
    return (
        <div className="navbar bg-base-100 sticky top-0 z-50">
            <MaxWidthWrapper >
                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost normal-case text-5xl"><SiNike /></Link>
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

                    {!session ? <button onClick={handleSignIn} className="btn  btn-primary">Login</button>
                        : (<div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <Image src={session?.user.image} width={500} height={500} priority alt={session?.user.name} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <h2>{session?.user.name}</h2>
                                </li>
                                <li><Link href="/dashboard">Dashboard</Link></li>
                                <li><Link href="/ordars">Ordars</Link></li>
                                <li><button onClick={handleSignOut}>Logout</button></li>
                            </ul>
                        </div>)}
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default Navbar

