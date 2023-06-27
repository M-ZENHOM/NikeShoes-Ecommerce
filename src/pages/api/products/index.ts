import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '~/lib/MongoDb';
import type { Product } from '~/pages/dashboard';



export const getProducts = async (): Promise<Product[]> => {
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

        if (req.body.title &&
            req.body.id &&
            req.body.images &&
            req.body.price &&
            req.body.category &&
            req.body.description &&
            req.body.thumbnail) {
            const product = {
                id: req.body.id,
                title: req.body.title,
                price: req.body.price,
                category: req.body.category,
                description: req.body.description,
                thumbnail: req.body.thumbnail,
                images: req.body.images,
            }
            const insertedId = await addProduct(product)
            res.status(200).json(insertedId)
        } else {
            res.status(400).json({ error: "Product data are requird!" })
        }

    }



}

