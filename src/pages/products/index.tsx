import type { GetServerSideProps } from 'next'
import React from 'react'
import type { ProductType } from '~/Types'
import { getProducts } from '../api/products'
import FilterData from '~/utils/FilterData'
import ProductCardTwo from '~/components/ProductCardTwo'
import { IoGridOutline, IoMenuOutline } from 'react-icons/io5'
import { sortOptions } from '~/config/products'
import SEO from '~/components/SEO'



const ProductsPage = ({ data }: { data: ProductType[] }) => {
    const [grid, setGrid] = React.useState<boolean>(true)
    const { filtered, handleSelect, handleChange, setCategoryQuery, AllData } = FilterData({ data: data });

    return (
        <>
            <SEO title="All Products" desc="Nike store for shoes developed with nextjs, typescript, tailwind, mongodb" />
            <div className=' my-8 flex w-full md:flex-col md:my-20 '>
                <div className="flex flex-col space-y-5 items-start ">
                    <div className="flex flex-col items-start  space-y-5  sticky top-20 md:justify-center md:items-center w-full   ">
                        <input onChange={handleChange} type="text" placeholder="Search" className="input input-bordered  rounded-none " />
                        <h2 className='text-xl font-bold'>Category</h2>
                        <div className='flex flex-col justify-start items-start space-y-4 md:flex-row md:space-x-5 md:space-y-0 md:items-center md:justify-center md:text-center'>
                            <button onClick={() => AllData()}>All</button>
                            <button onClick={() => setCategoryQuery("Men's Shoes")}>Men's Shoes</button>
                            <button onClick={() => setCategoryQuery("Men's Basketball Shoes")}>Men's Basketball Shoes</button>
                        </div>
                        <button className='bg-red-500 text-white rounded-xl p-2' onClick={() => AllData()}>Clear Filter</button>
                    </div>
                </div>
                <div className="divider divider-horizontal md:divider-vertical" />
                <div className='flex flex-col space-y-5 w-full'>
                    <div className='flex items-center justify-center space-x-2 w-full md:flex-wrap md:space-y-5  '>
                        <div className='flex items-center space-x-3'>
                            <div onClick={() => setGrid(true)} className={`bg-black p-2 rounded-md  hover:scale-110 transition-all duration-500 cursor-pointer ${grid && "bg-red-500"}`}>
                                <IoGridOutline className='text-xl  text-white' />
                            </div>
                            <div onClick={() => setGrid(false)} className={`bg-black p-2 rounded-md  hover:scale-110 transition-all duration-500 cursor-pointer ${!grid && "bg-red-500"}`}>
                                <IoMenuOutline className='text-xl text-white ' />
                            </div>
                            <p className='w-[120px]'>{filtered.length} Shoes Found</p>
                        </div>
                        <div className='w-full bg-black h-[1px] md:hidden' />
                        <select onChange={handleSelect} className="select select-bordered">
                            <option disabled selected>Sort by</option>
                            {sortOptions.map((s, i) => (
                                <option key={i} value={s.value}>{s.label}</option>
                            ))}

                        </select>
                    </div>
                    <div className={`${!grid ? "flex flex-col w-full gap-5" : "grid grid-cols-fluidTwo gap-10 w-full"}`} >
                        {filtered.map((shoe: ProductType) => (
                            <ProductCardTwo key={shoe._id} shoe={shoe} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )


}

export default ProductsPage


export const getServerSideProps: GetServerSideProps = async () => {
    const data = await getProducts();
    return {
        props: {
            data,
            revalidate: 60,
        },
    };
};
