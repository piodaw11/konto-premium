import { NextApiRequest, NextApiResponse } from 'next'
import useConnectToDatabase from 'src/server/hooks/useConnectToDatabase'

const Login = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    db,
    client
  } = await useConnectToDatabase()

  const { email, password } = req.body

  const usersCollection = db.collection('users')

  const user = await usersCollection.findOne({
    email,
    password
  })

  if (!user) {
    res.status(401).json({
      message: 'Niepoprawny adres email lub hasło'
    })
  }

  res.status(200).json({
    message: 'Pomyślnie zalogowano użytkownika'
  })

  await client.close()
}

export default Login
