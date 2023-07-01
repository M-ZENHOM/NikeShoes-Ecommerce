import Image from "next/image";
import EmptyImg from "../../public/empty-cart.png";
import Link from "next/link";

const EmptyCart = () => {
    return (
        <div className="flex flex-col w-[400px] md:w-auto px-5 py-[100px] justify-center items-center text-center mx-auto">
            <Image src={EmptyImg} alt="empty image" priority />
            <h2 className="font-bold text-xl">Your cart is empty</h2>
            <p className="w-full py-4">
                Looks like you have not added anything in your cart. Go ahead and
                explore top categories.
            </p>
            <Link
                href="/"
                className="bg-black w-[200px] text-white p-5 rounded-full hover:bg-black/80"
            >
                Continue Shopping
            </Link>
        </div>
    );
};

export default EmptyCart;
