import type { FC } from 'react'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import LoadingSkeleton from '~/components/LoadingSkeleton'
import SEO from '~/components/SEO'
import { usePathname } from 'next/navigation'

interface DashboardLayoutProps {
    children: React.ReactNode
}
const Dashboard: FC<DashboardLayoutProps> = ({ children }) => {
    const { data: session, status } = useSession()
    const pathname = usePathname();

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
        <div className='my-5 flex w-full md:flex-col'>
            <SEO title="Dashboard" desc="Here u can control all ur products" />
            <div className='flex flex-col h-fit sticky top-20 bg-base-100  p-4 py-8 z-10'>
                <h2 className='font-bold text-5xl mb-3 md:text-center'>Dashboard</h2>
                <div className="tabs tabs-boxed flex flex-col justify-start items-start p-8 md:p-2 md:flex-row">
                    <Link className={`tab ${pathname === "/dashboard/products" ? "tab-active" : ''}`} href="/dashboard/products">Products</Link>
                    <Link className={`tab ${pathname === "/dashboard/actions" ? "tab-active" : ''}`} href="/dashboard/actions">Actions</Link>
                    <Link className={`tab ${pathname === "/dashboard/ordars" ? "tab-active" : ''}`} href="/dashboard/ordars">Ordars</Link>
                </div>
            </div>
            <div className="divider divider-horizontal md:divider-vertical" />
            <div className='grid flex-grow  h-screen '>
                {children}
            </div>
        </div>
    )

}

export default Dashboard
