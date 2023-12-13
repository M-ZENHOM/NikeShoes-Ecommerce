import type { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { ProductType } from '~/Types';
import clientPromise from '~/lib/MongoDb';
import { ProductSchema, ProductSchemaType } from '~/lib/validations/ProductPost';

export const getProducts = async (sort: "a-z" | "z-a" | "price-asc" | "price-desc" = "a-z", limit: number = 9, searchQuery: string = '', categoryQuery: string = ''): Promise<ProductType[]> => {
    const mongoClient = await clientPromise;

    const data = (await mongoClient
        .db()
        .collection('products')
        .find({ title: { $regex: searchQuery, $options: 'i' } })
        .filter({ icategory: { $regex: categoryQuery, $options: 'i' } })
        .sort({ title: sort === 'a-z' ? 1 : -1 })
        .limit(limit)
        .toArray());

    return JSON.parse(JSON.stringify(data));
};



export const addProduct = async (product: ProductSchemaType): Promise<ObjectId> => {
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
            const product = req.body as ProductSchemaType;
            await ProductSchema.validate({ ...product }, { abortEarly: false });
            const insertedId = await addProduct(product)
            res.status(200).json(insertedId)
        } catch (error) {
            res.status(400).json({ error: "Product data are requird or validation error!" })
        }

    }
}

