import type { FC } from 'react'
import SEO from "~/components/SEO";
import ProductCard from "~/components/ProductCard";
import Hero from "~/components/ui/Hero";
import MarqueeSwiper from "~/components/MarqueeSwiper";
import SearchFilteration from "~/utils/SearchFilteration";
import { getProducts } from "./api/products";
import { GetStaticProps } from 'next';
import React from "react";
import type { ProductType } from "~/Types";



interface indexProps {
  data: ProductType
}

const Home: FC<indexProps> = ({ data }) => {
  const { filtered, handleChange, setCategoryQuery, AllData } = SearchFilteration({ data: data });
  return (
    <>
      <SEO title="Home Page" desc="new desc" />
      <Hero />
      <MarqueeSwiper />
      <div className="flex justify-center items-center space-x-5 flex-wrap my-20 md:space-y-5 ">
        <input onChange={handleChange} type="text" placeholder="Search" className="input input-bordered input-primary w-full max-w-xs" />
        <div className="md:flex md:justify-center space-x-1 md:items-center md:mx-auto">
          <button className="btn btn-primary md:text-[12px]" onClick={() => setCategoryQuery("Men's Shoes")}>Men's Shoes</button>
          <button className="btn btn-primary md:text-[12px]" onClick={() => setCategoryQuery("Men's Basketball Shoes")}>Men's Basketball Shoes</button>
          <button className="btn btn-primary md:text-[12px]" onClick={() => AllData()}>All</button>
        </div>
      </div>
      <div className="grid grid-cols-fluid gap-28 pb-[100px] place-items-center">
        {filtered.map((shoe: ProductType) => (
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

