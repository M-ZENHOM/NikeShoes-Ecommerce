import { NextApiRequest, NextApiResponse } from "next";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY!);


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const id = req.query.id

    try {
        if (!id?.includes("cs_")) {
            throw Error("Inconrrect CheckoutSession Id")
        }
        const checkout_session = await stripe.checkout.sessions.retrieve(id);
        res.status(200).json(checkout_session)
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: "Error in id stipe end point" })

    }

}