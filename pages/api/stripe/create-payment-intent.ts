// This is your test secret API key.
import { NextApiRequest, NextApiResponse } from 'next'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const calculateOrderAmount = (items: number) => items * 100

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { items } = req.body

  console.log(items)

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: 'pln',
    automatic_payment_methods: {
      enabled: true
    }
  })

  res.send({
    clientSecret: paymentIntent.client_secret
  })
}
