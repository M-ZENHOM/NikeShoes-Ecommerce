import type { FC } from 'react'
import SEO from "~/components/SEO";
import ProductCard from "~/components/ProductCard";
import Hero from "~/components/ui/Hero";
import MarqueeSwiper from "~/components/MarqueeSwiper";
import { getProducts } from "./api/products";
import type { GetStaticProps } from 'next';
import React from "react";
import type { ProductType } from "~/Types";



interface indexProps {
  data: ProductType[]
}

const Home: FC<indexProps> = ({ data }) => {
  return (
    <>
      <SEO title="Home Page" desc="new desc" />
      <Hero />
      <MarqueeSwiper />
      <div className="flex justify-center items-center space-x-5 flex-wrap my-5 md:space-y-5 ">
        <div className="md:flex md:justify-center space-x-1 md:items-center md:mx-auto">
        </div>
      </div>
      <div className="grid grid-cols-fluid gap-28 pb-[100px] place-items-center">
        {data.map((shoe: ProductType) => (
          <ProductCard key={shoe._id} shoe={shoe} />
        ))}
      </div>
    </>
  )
}

export default Home



export const getStaticProps: GetStaticProps = async () => {
  const data = await getProducts();
  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};

