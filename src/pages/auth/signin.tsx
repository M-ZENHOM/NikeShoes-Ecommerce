import type { NextPage } from 'next'
import { signIn } from 'next-auth/react'
import { FaGooglePlusSquare } from 'react-icons/fa'
import { SiNike } from 'react-icons/si'



const SigninPage: NextPage = () => {
    return (
        <div className='h-[70vh] flex flex-col items-center justify-center border my-6'>
            <SiNike className='text-8xl' />
            <h2 className='text-3xl'>Welcome to signin page!</h2>
            <button
                onClick={async (): Promise<void> => {
                    await signIn();
                }}
                className='flex items-center justify-center text-3xl space-x-4 mt-8 bg-black text-white p-2 rounded-md hover:bg-[#c5c0c0] hover:text-black transition-all duration-500'
            >
                <FaGooglePlusSquare className='mr-2 text-5xl' /> Sign in with Google
            </button>
        </div>
    );
};


export default SigninPage