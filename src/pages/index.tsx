import type { FC } from 'react'
import SEO from "~/components/SEO";
import ProductCard from "~/components/ProductCard";
import Hero from "~/components/ui/Hero";
import MarqueeSwiper from "~/components/MarqueeSwiper";
import { getProducts } from "./api/products";
import type { GetServerSideProps } from 'next';
import React from "react";
import type { ProductType } from "~/Types";
import FooterAction from '~/components/FooterAction';



interface indexProps {
  data: ProductType[]
}

const Home: FC<indexProps> = ({ data }) => {
  return (
    <>
      <SEO title="Home" desc="Nike store for shoes developed with nextjs, typescript, tailwind, mongodb" />
      <Hero />
      <div className='customDivider' />
      <h2 className='font-bold text-4xl  my-10'>Featured Shoes</h2>
      <div className="grid grid-cols-fluid gap-28 pb-[100px] place-items-center">
        {data.slice(0, 6).map((shoe: ProductType) => (
          <ProductCard key={shoe._id} shoe={shoe} />
        ))}
      </div>
      <div className='customDivider' />
      <MarqueeSwiper />
      <FooterAction />
    </>
  )
}

export default Home



export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getProducts();
  return {
    props: {
      data,
      revalidate: 60,
    },
  };
};

