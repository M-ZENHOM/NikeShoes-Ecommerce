import type { Metadata, NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import clientPromise from "~/lib/MongoDb";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY as string);


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const id = req.query.id as string;
    const mongoClient = await clientPromise;

    try {
        if (!id.startsWith('cs_')) {
            throw Error("Inconrrect CheckoutSession Id")
        }
        const checkout_session: Stripe.Checkout.Session = await stripe.checkout.sessions.retrieve(id);
        const email = checkout_session?.metadata?.email;
        const userCollection = mongoClient.db().collection("users");
        const sessionUser = await userCollection.findOne({ email });
        const paymentDetails = {
            totalPrice: checkout_session?.amount_total,
            currency: checkout_session?.currency,
            img: checkout_session?.metadata?.images,
            shippingDetails: checkout_session?.customer_details,
            paymentStatus: checkout_session?.status,
            shippingTime: checkout_session?.expires_at,
        }
        if (sessionUser) {
            // Insert orders into the user's collection
            await userCollection.updateOne(
                { email },
                { $push: { orders: paymentDetails } }
            );
            // console.log("Orders inserted successfully!");
            res.status(200).json({ message: "Orders inserted successfully" });
        } else {
            console.log("User not found");
            res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: "Error in id stipe end point" })

    }

}