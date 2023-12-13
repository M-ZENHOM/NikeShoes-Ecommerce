import { useRouter } from 'next/router'
import React from 'react'

export default function CategoryFilter() {
    const router = useRouter()
    return (
        <>
            <h2 className='text-xl font-bold'>Category</h2>
            <div className='flex flex-col justify-start items-start space-y-4 md:flex-row md:space-x-5 md:space-y-0 md:items-center md:justify-center md:text-center'>
                <button onClick={() => router.push("/products")}>All</button>
                <button onClick={() => router.push(`/products?category=Men's Shoes&sort=${router.query.sort || "a-z"}&grid=${router.query.grid || "true"}`)}>Men's Shoes</button>
                <button onClick={() => router.push(`/products?category=Men's Basketball Shoes&sort=${router.query.sort || "a-z"}&grid=${router.query.grid || "true"}`)}>Men's Basketball Shoes</button>
            </div>
            <button className='bg-red-500 text-white rounded-xl p-2' onClick={() => router.push("/products")}>Clear Filter</button>
        </>
    )
}
