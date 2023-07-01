import type { StripeError } from "@stripe/stripe-js";
import axios from "axios";
import { useSession } from "next-auth/react";
import type { ProductType } from "~/Types";
import CartItems from "~/components/CartItems";
import EmptyCart from "~/components/EmptyCart";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { CLEAR_CART } from "~/store/slices/cart";
import { getStripe } from "~/utils/getStripe";

const CartPage = () => {
    const cart = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch()
    const { data: session } = useSession();

    const totalPrice = cart.reduce((acc: number, product: ProductType) => {
        acc += product.price * product.quantity;
        return acc;
    }, 0);

    const createCheckoutSession = async (): Promise<void> => {
        const stripe = await getStripe();
        const checkoutSession = await axios.post('/api/checkout-session', {
            items: cart,
            email: session?.user.email
        })


        const result: { error: StripeError } | undefined = await stripe?.redirectToCheckout({
            sessionId: checkoutSession.data.id
        })
        if (result?.error) {
            console.log(result?.error);
        }

    }

    return (
        <>
            {cart.length !== 0 ? (
                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-bold text-3xl my-28">Shopping Cart</h2>
                    <div className="flex max-w-[1360px] lg:max-w-[800px] lg:px-5 mx-auto justify-between w-full lg:flex-col lg:items-center pl-10 pb-[100px]">
                        <div className="flex flex-col  mb-28">
                            <h4 className="font-bold text-2xl mb-5">Cart Items</h4>
                            <CartItems data={cart} />
                            {cart.length >= 2 && (
                                <button className="bg-red-600 w-full max-w-[150px] text-white p-2 my-8 rounded-full hover:bg-black/80" onClick={() => dispatch(CLEAR_CART())}>Empty ur cart</button>
                            )}
                        </div>
                        <div className="flex flex-col w-[400px] space-y-5 lg:w-auto h-full lg:pb-10 mx-auto  ">
                            <h4 className="font-bold text-2xl mb-5">Summary</h4>
                            <div className="w-full bg-[#f2f2f2] p-5 rounded-xl">
                                <div className="flex justify-between border-b-[1px] border-[#6d6d6d59] pb-2">
                                    <h2>SUBTOTAL</h2>
                                    <p className="font-bold">{totalPrice}$</p>
                                </div>
                                <p className="w-full py-4">
                                    The subtotal reflects the total price of your order, including
                                    duties and taxes, before any applicable discounts. It does not
                                    include delivery costs and international transaction fees.
                                </p>
                            </div>

                            <button
                                role="link"
                                className={`${!session ? "bg-gray-500 w-full text-white p-5 rounded-full" : 'bg-black w-full text-white p-5 rounded-full hover:bg-black/80'}`}
                                onClick={createCheckoutSession}
                                disabled={!session}
                            >
                                {!session ? "Login in frist to checkout" : "Checkout"}
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <EmptyCart />
            )}
        </>
    );
};

export default CartPage;
