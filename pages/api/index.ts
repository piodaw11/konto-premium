import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req

  if (method === 'OPTIONS') {
    return res.status(200).send('ok')
  }

  return res.status(200).json({ message: 'Hello' })
}
