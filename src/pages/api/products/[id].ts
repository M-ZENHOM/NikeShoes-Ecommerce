import { ObjectId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import type { ProductType } from "~/Types";
import clientPromise from "~/lib/MongoDb";

export const getProduct = async (id: string | ObjectId) => {
    id = typeof id === 'string' ? new ObjectId(id) : id
    const mongoClient = await clientPromise;
    const data = await mongoClient
        .db()
        .collection('products')
        .findOne({ _id: id })

    return data

}
export const userProducts = async (id: string | undefined) => {

    const mongoClient = await clientPromise;
    const data = await mongoClient
        .db()
        .collection('products')
        .find({ userId: id })
        .toArray();

    return data

}
export const paymentDetails = async (id: string | ObjectId) => {
    id = typeof id === 'string' ? new ObjectId(id) : id
    const mongoClient = await clientPromise;
    const data = await mongoClient
        .db()
        .collection('users')
        .find({ _id: id })
        .toArray();

    return data

}
export const editProduct = async (
    id: string | ObjectId,
    product: ProductType
) => {
    id = typeof id === 'string' ? new ObjectId(id) : id;
    const mongoClient = await clientPromise;

    return await mongoClient
        .db()
        .collection('products')
        .replaceOne({ _id: id }, product);
};

export const deleteProduct = async (id: string | ObjectId) => {
    id = typeof id === 'string' ? new ObjectId(id) : id;
    const mongoClient = await clientPromise;

    return await mongoClient
        .db()
        .collection('products')
        .deleteOne({ _id: id });
};
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;

    if (req.method === ' GET') {

        const data = await getProduct(new ObjectId(id as string))

        if (!data) {
            res.status(404).json("Product not found")
        }

    } else if (req.method === 'PUT') {
        const product = req.body;

        const data = await editProduct(id as string, product);

        res.status(200).json({ modifiedCount: data.modifiedCount });

    } else if (req.method === 'DELETE') {
        const data = await deleteProduct(id as string);

        res.status(200).json({ deletedCount: data.deletedCount });
    }
}