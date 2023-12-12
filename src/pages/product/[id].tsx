import ProductDetails from "~/components/ProductDetails";
import ProductDetailsCarousel from "~/components/ProductDetailsCarousel";
import type { GetServerSideProps } from 'next'
import { getProduct } from "../api/products/[id]";
import SEO from "~/components/SEO";
import { ParsedUrlQuery } from 'querystring';
import type { ProductType } from '~/Types';

const ProductPage = ({ data }: { data: ProductType }) => {
    return (
        <div className="py-[100px] flex flex-col max-w-[1360px] w-full mx-auto ">
            <SEO title={data.title} desc={data.description} />
            <div className="flex  w-full mx-auto md:flex-col">
                <ProductDetailsCarousel data={data} />
                <ProductDetails data={data} />
            </div>
        </div>
    )
}

export default ProductPage

interface IParams extends ParsedUrlQuery {
    id: string
}
export const getServerSideProps: GetServerSideProps<{
    data: ProductType
}> = async (context) => {
    const { id } = context.params as IParams;
    try {
        const data = await getProduct(id);
        if (!data) {
            return {
                notFound: true,
                revalidate: 0,
            };
        }
        return {
            props: {
                data: JSON.parse(JSON.stringify(data)),
                revalidate: 0,
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


