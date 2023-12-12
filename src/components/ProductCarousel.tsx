import React from 'react'
import Carousel from "react-multi-carousel";
import type { ProductType } from '~/Types';
import ProductCard from './ProductCard';
import { responsiveCarousel } from '~/config/responsive';
import "react-multi-carousel/lib/styles.css";
export default function ProductCarousel({ data }: { data: ProductType[] }) {
    return (
        <>
            <div className='flex flex-col justify-center items-center space-y-4 my-5 pt-14 md:text-center'>
                <h2 className='font-bold text-4xl md:text-2xl '>Explore more of our product</h2>
                <p className='max-w-[25rem] w-full text-center text-gray-500 md:max-w-[20rem] '>All the collection we need, you can find from us without any hassle</p>
            </div>
            <Carousel
                className='py-8'
                responsive={responsiveCarousel}
                containerClass="carousel-container"
                itemClass="px-[10px]"
                autoPlaySpeed={1500}
                autoPlay={true}
                infinite={true}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
            >
                {data.slice(0, 9).map((shoe: ProductType) => (
                    <ProductCard key={shoe._id} shoe={shoe} />
                ))}
            </Carousel>
        </>
    )
}
