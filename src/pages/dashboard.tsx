import type { NextPage } from 'next'
import SEO from '~/components/SEO'


const Dashboard: NextPage = () => {
    return <div className='h-[65vh] flex justify-center items-center flex-col text-5xl space-y-5'>
        <SEO title="Dashboard" desc="Here u can control all ur products" />
        <h2 className='font-bold'>Dashboard</h2>
        <p className='text-3xl'>Dashboard Coming Soon!</p>
    </div>
}

export default Dashboard
