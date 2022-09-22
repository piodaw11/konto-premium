import { NextApiRequest, NextApiResponse } from 'next'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        line_items: req?.body?.items ?? [],
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/koszyk`,
        allow_promotion_codes: true
      })

      res.status(200).json(session)
    } catch (error: any) {
      res.status(500).json({ statusCode: 500, message: error.message })
    }
    } else {
      res.setHeader('Allow', 'POST')
      res.status(405).end('Method Not Allowed')
    }
}

export default handler
