import type { FC } from 'react'
import SEO from "~/components/SEO";
import ProductCard from "~/components/ProductCard";
import Hero from "~/components/ui/Hero";
import MarqueeSwiper from "~/components/MarqueeSwiper";
import { getProducts } from "./api/products";
import type { GetServerSideProps } from 'next';
import React from "react";
import type { ProductDataArr, ProductType } from "~/Types";
import FooterAction from '~/components/FooterAction';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { responsiveCarousel } from '~/config/responsive';
import UpdateBanner from '~/components/UpdateBanner';
import Image from 'next/image';
import BannerImg from "../../public/banner.jpg"



const Home: FC<ProductDataArr> = ({ data }) => {
  return (
    <>
      <SEO title="Home" desc="Nike store for shoes developed with nextjs, typescript, tailwind, mongodb" />
      <Hero />
      <MarqueeSwiper />
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
      <UpdateBanner />
      <Image className='w-full' src={BannerImg} alt="BannerImg image" priority />
      <div className='customDivider' />
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
      revalidate: 0,
    },
  };
};

