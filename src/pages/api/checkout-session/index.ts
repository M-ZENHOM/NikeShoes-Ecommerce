import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY as string);
import type { ProductType } from '~/Types'



const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { items, email }: { items: ProductType[], email: string } = req.body
        const transformedItems = items.map((item) => ({
            quantity: item.quantity,
            price_data: {
                currency: 'usd',
                unit_amount: item.price * 100, // to convert into cents
                product_data: {
                    images: [item.thumbnail],
                    name: item.title,
                    description: item.description,
                },
            },
        }))
        try {

            const session: Stripe.Checkout.Session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                shipping_address_collection: {
                    allowed_countries: ["EG", "US"]
                },
                line_items: transformedItems,
                mode: 'payment',
                success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/cancelled`,
                metadata: {
                    email,
                    images: JSON.stringify(items.map((item: ProductType) => item.thumbnail))
                },
            })

            res.status(200).json({ id: session.id })
        } catch (err) {
            const errorMessage =
                err instanceof Error ? err.message : 'Internal server error'
            res.status(500).json({ statusCode: 500, message: errorMessage })
        }
    }
    else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method Not Allowed')
    }
}
export default handler;