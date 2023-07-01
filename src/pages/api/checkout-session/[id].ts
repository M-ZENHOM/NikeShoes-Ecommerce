import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY as string);


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const id = req.query.id

    try {
        if (!id?.includes("cs_")) {
            throw Error("Inconrrect CheckoutSession Id")
        }
        const checkout_session: Stripe.Checkout.Session = await stripe.checkout.sessions.retrieve(id);
        res.status(200).json(checkout_session)
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: "Error in id stipe end point" })

    }

}