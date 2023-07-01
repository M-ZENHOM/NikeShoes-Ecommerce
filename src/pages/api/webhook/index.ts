import Stripe from 'stripe';
import { buffer } from 'micro';
import type { NextApiRequest, NextApiResponse } from 'next';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2022-11-15',
});

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        let event: Stripe.Event;

        try {
            // 1. Retrieve the event by verifying the signature using the raw body and secret
            const rawBody = await buffer(req);
            const signature = req.headers['stripe-signature'] as string;

            event = stripe.webhooks.constructEvent(
                rawBody.toString(),
                signature,
                process.env.STRIPE_WEBHOOK_SECRET as string
            );
        } catch (err) {
            console.log(`❌ Error message: ${err}`);
            res.status(400).send(`Webhook Error: ${err}`);
            return;
        }

        // Successfully constructed event
        console.log('✅ Success:', event.id);

        // 2. Handle event type (add business logic here)
        if (event.type === 'checkout.session.completed') {
            console.log(`💰  Payment received!`);
        } else {
            console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
        }

        // 3. Return a response to acknowledge receipt of the event.
        res.json({ received: true });
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
