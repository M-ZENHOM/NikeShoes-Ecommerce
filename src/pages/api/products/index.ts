import type { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { ProductType } from '~/Types';
import clientPromise from '~/lib/MongoDb';
import { ProductSchema } from '~/lib/validations/ProductPost';


type Product = {
    title: string,
    quantity: number,
    description: string,
    price: number,
    category: string,
    size: string

}
export const getProducts = async (): Promise<ProductType[]> => {
    const mongoClient = await clientPromise;

    const data = (await mongoClient
        .db()
        .collection('products')
        .find()
        .toArray());

    return JSON.parse(JSON.stringify(data));
};



export const addProduct = async (product: Product): Promise<ObjectId> => {
    const mongoClient = await clientPromise;

    const res = await mongoClient
        .db()
        .collection('products')
        .insertOne(product)

    return res.insertedId
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const data = await getProducts()
        res.status(200).json({ data })

    } else if (req.method === "POST") {

        try {
            const { id, title, images, category, price, size, thumbnail, description, quantity, sizes, userId } = req.body
            await ProductSchema.validate({ id, title, images, category, price, size, thumbnail, description, quantity, sizes }, { abortEarly: false });
            const product = {
                title,
                price,
                category,
                description,
                thumbnail,
                images,
                quantity,
                size,
                id,
                sizes,
                userId,
            }
            const insertedId = await addProduct(product)
            res.status(200).json(insertedId)
        } catch (error) {
            res.status(400).json({ error: "Product data are requird or validation error!" })
        }

    }
}

