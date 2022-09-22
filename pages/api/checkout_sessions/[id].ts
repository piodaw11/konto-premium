import { NextApiRequest, NextApiResponse } from 'next'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const id: any = req.query.id

  try {
    if (!id?.startsWith('cs_')) {
      throw new Error('Invalid Checkout Session ID')
    }
    const checkout_session = await stripe.checkout.sessions.retrieve(id)

    res.status(200).json(checkout_session)
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
