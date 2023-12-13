import type { GetServerSideProps } from 'next'
import React from 'react'
import type { ProductType } from '~/Types'
import { getProducts } from '../api/products'
import ProductCardTwo from '~/components/ProductCardTwo'
import { IoGridOutline, IoMenuOutline } from 'react-icons/io5'
import SEO from '~/components/SEO'
import ProductSearch from '~/components/ProductSearch'
import CategoryFilter from '~/components/CategoryFilter'
import ProductsSort from '~/components/ProductsSort'
import { useRouter } from 'next/router'


const ProductsPage = ({ data }: { data: ProductType[] }) => {
    const router = useRouter()
    return (
        <>
            <SEO title="All Products" desc="Nike store for shoes developed with nextjs, typescript, tailwind, mongodb" />
            <div className=' my-8 flex w-full md:flex-col md:my-20 '>
                <div className="flex flex-col space-y-5 items-start ">
                    <div className="flex flex-col items-start  space-y-5  sticky top-20 md:justify-center md:items-center w-full   ">
                        <ProductSearch />
                        <CategoryFilter />
                    </div>
                </div>
                <div className="divider divider-horizontal md:divider-vertical" />
                <div className='flex flex-col space-y-5 w-full'>
                    <div className='flex items-center justify-center space-x-2 w-full md:flex-wrap md:space-y-5  '>
                        <div className='flex items-center space-x-3'>
                            <div onClick={() => router.push(`/products?grid=true&sort=${router.query.sort || "a-z"}&category=${router.query.category || ""}`)} className={`bg-black p-2 rounded-md  hover:scale-110 transition-all duration-500 cursor-pointer ${!router.query.grid && "bg-red-500"}  ${router.query.grid === "true" && "bg-red-500"}`}>
                                <IoGridOutline className='text-xl  text-white' />
                            </div>
                            <div onClick={() => router.push(`/products?grid=false&sort=${router.query.sort || "a-z"}&category=${router.query.category || ""}`)} className={`bg-black p-2 rounded-md  hover:scale-110 transition-all duration-500 cursor-pointer ${router.query.grid === "false" && "bg-red-500"}`}>
                                <IoMenuOutline className='text-xl text-white ' />
                            </div>
                            <p className='w-[120px]'>{data.length} Shoes Found</p>
                        </div>
                        <div className='w-full bg-black h-[1px] md:hidden' />
                        <ProductsSort />
                    </div>
                    <div className={`${router.query.grid === "false" ? "flex flex-col w-full gap-5" : "grid grid-cols-fluidTwo gap-10 w-full"}`} >
                        {data.map((shoe: ProductType) => (
                            <ProductCardTwo key={shoe._id} shoe={shoe} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )


}

export default ProductsPage


export const getServerSideProps: GetServerSideProps = async (context) => {
    const { sort, limit, search, category } = context.query;
    const sortValue = sort as "a-z" | "z-a" || "a-z";
    const limitValue = parseInt(limit as string, 9) || 9;
    const searchValue = search as string;
    const categoryValue = category as string;
    const data = await getProducts(sortValue, limitValue, searchValue, categoryValue);
    return {
        props: {
            data,
            revalidate: 60,
        },
    };
};
