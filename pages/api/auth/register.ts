import { NextApiRequest, NextApiResponse } from 'next'

import useConnectToDatabase from 'src/server/hooks/useConnectToDatabase'

const Register = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    db,
    client
  } = await useConnectToDatabase()

  const { email, password, firstName, lastName, phone } = req.body

  const usersCollection = db.collection('users')

  const emailExist = await usersCollection.findOne({ email })
  const phoneExist = await usersCollection.findOne({ phone })

  if (emailExist) {
    return res.status(400).json({ message: 'Adres email jest już zajęty' })
  }
  if (phoneExist) {
    return res.status(400).json({ message: 'Numer telefonu jest już zajęty' })
  }

  if (!emailExist && !phoneExist) {
    await usersCollection.insertOne({
      email,
      password,
      phone,
      firstName,
      lastName
    })
  }

  await client.close()

  return res.status(201).json({
    message: 'Pomyślnie zarejestrowano użytkownika'
  })
}

export default Register
