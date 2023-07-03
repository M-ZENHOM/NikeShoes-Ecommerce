import type { NextPage } from 'next'
import { signIn, useSession } from 'next-auth/react'
import DashboardForm from '~/components/Forms/DashboardForm'
import LoadingSkeleton from '~/components/LoadingSkeleton'
import SEO from '~/components/SEO'


const Dashboard: NextPage = () => {
    const { data: session, status } = useSession()

    if (status === "unauthenticated") {
        return (
            <div className='h-[65vh] flex flex-col justify-center items-center text-5xl space-y-5'>
                <h2>This page for users only!</h2>
                <p>Go signin frist please!</p>
                <button className='bg-black text-white p-4 rounded-md text-2xl w-full max-w-md hover:bg-slate-500' onClick={() => signIn()}>SignIn</button>
            </div>
        )
    }
    if (status === "loading") {
        return <LoadingSkeleton />
    }
    return (
        <div className='my-8'>
            <SEO title="Dashboard" desc="Here u can control all ur products" />
            <h2 className='font-bold text-5xl mb-3'>Add New Product</h2>
            <DashboardForm />
        </div>
    )

}

export default Dashboard
