
import type { FC } from 'react'
import ProductDetails from "~/components/ProductDetails";
import ProductCarousel from "~/components/ProductCarousel";
import type { GetServerSideProps } from 'next'
import type { Data, ProductType } from "~/Types";
import { getProduct } from "../api/products/[id]";
import SEO from "~/components/SEO";
import { ParsedUrlQuery } from 'querystring';



interface ProductPageProps {
    data: ProductType
}

const ProductPage: FC<ProductPageProps> = ({ data }) => {
    return (
        <div className="py-[100px] flex flex-col max-w-[1360px] w-full mx-auto ">
            <SEO title={data.title} desc={data.description} />
            <div className="flex  w-full mx-auto md:flex-col">
                <ProductCarousel data={data} />
                <ProductDetails data={data} />
            </div>
            {/* <RelatedProduct /> */}
        </div>
    )
}

export default ProductPage

interface IParams extends ParsedUrlQuery {
    id: string
}
export const getServerSideProps: GetServerSideProps<{
    data: Data
}> = async (context) => {
    const { id } = context.params as IParams;
    try {
        const data = await getProduct(id);
        if (!data) {
            return {
                notFound: true,
                revalidate: 60,
            };
        }
        return {
            props: {
                data: JSON.parse(JSON.stringify(data)),
                revalidate: 60,
            },
        };

    } catch (err) {
        console.log(err);
        if (err instanceof Error) {
            return {
                notFound: true,
            };
        }
        throw err;

    }

}


