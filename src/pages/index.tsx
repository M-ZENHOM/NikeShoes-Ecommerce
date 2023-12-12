import SEO from "~/components/SEO";
import Hero from "~/components/ui/Hero";
import MarqueeSwiper from "~/components/MarqueeSwiper";
import { getProducts } from "./api/products";
import type { GetServerSideProps } from 'next';
import React from "react";
import type { ProductType } from "~/Types";
import Subscribe from '~/components/Subscribe';
import ShoeBanner from '~/components/UpdateBanner';
import Image from 'next/image';
import BannerImg from "../../public/banner.jpg"
import ProductCarousel from '~/components/ProductCarousel';

const Home = ({ data }: { data: ProductType[] }) => {
  return (
    <>
      <SEO title="Home" desc="Nike store for shoes developed with nextjs, typescript, tailwind, mongodb" />
      <Hero />
      <MarqueeSwiper />
      <ProductCarousel data={data} />
      <ShoeBanner />
      <Image className='w-full' src={BannerImg} alt="BannerImg image" priority />
      <div className='customDivider' />
      <Subscribe />
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

