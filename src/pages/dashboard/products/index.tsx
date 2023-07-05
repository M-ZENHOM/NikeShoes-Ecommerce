import { FC } from 'react'
import Dashboard from '..'
import ProductsTable from '~/components/ProductsTable'
import { GetServerSidePropsContext } from 'next'
import { userProducts } from '~/pages/api/products/[id]'
import { ProductType } from '~/Types'
import { getServerSession } from 'next-auth'
import { authOptions } from '~/server/auth'

interface indexProps {
    data: ProductType[]
}

const index: FC<indexProps> = ({ data }) => {
    return (
        <Dashboard>
            <ProductsTable data={data} />
        </Dashboard>
    )
}

export default index

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, authOptions)
    const userId = session?.user.id;
    const fetchedData = await userProducts(userId)
    const data = JSON.parse(JSON.stringify(fetchedData))
    if (!session) {
        return {
            redirect: {
                destination: '/auth/signin',
                permanent: false,
            },
        }
    }

    return {
        props: {
            data,
        },
    }
}