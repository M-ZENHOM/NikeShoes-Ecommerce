
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { GetStaticProps } from 'next';
import type { ProductType } from "~/Types";
import ProductCard from "./ProductCard";
import { getProducts } from "~/pages/api/products";

import type { FC } from 'react'

interface RelatedProductProps {
    data: ProductType
}
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1023, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 1,
    },
};

const RelatedProduct: FC<RelatedProductProps> = ({ data }) => {

    return (
        <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0 px-4 ">
            <div className="text-2xl font-bold mb-5 ">You Might Also Like</div>

            <Carousel
                responsive={responsive}
                containerClass="-mx-[10px]"
                itemClass="px-[10px]"
            >
                {data.map((shoe: ProductType) => (
                    <ProductCard key={shoe?.id} shoe={shoe} />
                ))}
            </Carousel>

        </div>
    )
}

export default RelatedProduct


export const getStaticProps: GetStaticProps = async () => {
    const data = await getProducts();
    return {
        props: {
            data,
        },
        revalidate: 60,
    };
};

