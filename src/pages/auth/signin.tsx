import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from '~/server/auth';
import { FaGooglePlusSquare } from 'react-icons/fa'
import { SiNike } from 'react-icons/si'



const SigninPage = ({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return <div className='h-[70vh] flex flex-col items-center justify-center border  my-6'>
        <SiNike className='text-8xl' />
        <h2 className='text-3xl'>Welcome to signin page!</h2>
        {Object.values(providers).map((provider) => (
            <div key={provider.name}>
                <button onClick={() => {
                    signIn(provider.id)
                        .then(() => {
                            signIn(provider.id)
                        })
                        .catch((error) => {
                            console.log(error);

                        });
                }} className='flex items-center justify-center text-3xl space-x-4 mt-8 bg-black text-white p-2 rounded-md hover:bg-[#c5c0c0] hover:text-black transition-all duration-500'>
                    <FaGooglePlusSquare className='mr-2 text-5xl' /> Sign in with {provider.name}
                </button>
            </div>
        ))}

    </div>
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, authOptions);

    if (session) {
        return { redirect: { destination: "/" } };
    }

    const providers = await getProviders();

    return {
        props: { providers: providers ?? [] },
    }
}

export default SigninPage