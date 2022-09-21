import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import clientPromise from 'pages/api/auth/lib/mongodb'
import LoginForm from 'src/client/presentation/Login/components/types/LoginForm'

export default NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60,
    updateAge: 60 * 60
  },
  providers: [
    CredentialsProvider({
      credentials: undefined,
      name: 'credentials',
      type: 'credentials',
      id: 'credentials',
      async authorize(credentials: LoginForm) {
        const client = await clientPromise
        const db = client.db('konto-premium')
        const collection = db.collection('users')
        const user = await collection.findOne({
          email: credentials.email,
          password: credentials.password
        })
        if (!user) {
          throw new Error('Użytkownik nie istnieje')
        }
        if (user) {
          return {
            email: user.email
          }
        }
        return undefined
      }
    })
  ]
})
