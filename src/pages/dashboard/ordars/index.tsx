import type { GetServerSidePropsContext, NextPage } from 'next'
import React from 'react'
import Dashboard from '..'
import { getServerSession } from 'next-auth'
import { authOptions } from '~/server/auth'
import { paymentDetails } from '~/pages/api/products/[id]'
import type { FC } from 'react'
import { OrdersType } from '~/Types'
import Image from 'next/image'
import { formatMillisecondsToDays, formatOrdarImg, formatPrice } from '~/lib/utils'


interface OrdarProps {
    data: OrdersType
}
const OrdarsPage: FC<OrdarProps> = ({ data }) => {

    return (
        <Dashboard>
            {!data ? <h2 className='text-xl my-5 font-bold'>There's no ordars.</h2> :
                (
                    <div className="overflow-x-auto">
                        <h2 className='text-xl my-5 font-bold'>Your Ordars</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Shipping Address</th>
                                    <th>Customer Details</th>
                                    <th>Shipping Time</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((d, i) => (

                                    <tr key={i}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill priority src={formatOrdarImg(d.img)} alt="shoes img" />
                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge badge-ghost badge-sm">{formatPrice(d.totalPrice, d.currency)}</span>
                                        </td>
                                        <td>
                                            <div className="font-bold flex ">  {d.shippingDetails.address.city} -
                                                <div className="text-sm ml-3">  {d.shippingDetails.address.country}</div>
                                            </div>

                                            <div className="text-sm opacity-50">  {d.shippingDetails.address.line1}</div>
                                        </td>
                                        <td>
                                            <div className="text-sm">  {d.shippingDetails.name}</div>
                                            <div className="text-sm opacity-50">  {d.shippingDetails.email}</div>
                                        </td>
                                        <td>{formatMillisecondsToDays(d.shippingTime)}
                                        </td>
                                        <td>{d.paymentStatus}</td>

                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                )
            }
        </Dashboard>
    )
}

export default OrdarsPage




export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, authOptions)
    const userId = session?.user.id as string;
    const fetchedData = await paymentDetails(userId)
    const data = JSON.parse(JSON.stringify(fetchedData[0]?.orders))
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