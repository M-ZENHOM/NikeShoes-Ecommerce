import type { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { ProductType } from '~/Types';
import clientPromise from '~/lib/MongoDb';
import type { Product } from '~/pages/dashboard';



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
        const { title, id, images, category, price, thumbnail, description }: ProductType = req.body

        if (title && id && images && price && category && description && thumbnail) {
            const product = {
                id,
                title,
                price,
                category,
                description,
                thumbnail,
                images,
            }
            const insertedId = await addProduct(product)
            res.status(200).json(insertedId)
        } else {
            res.status(400).json({ error: "Product data are requird!" })
        }

    }



}

