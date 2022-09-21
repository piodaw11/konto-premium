import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import clientPromise from 'pages/api/auth/lib/mongodb'

export default NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60,
    updateAge: 60 * 60
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      name: 'credentials',
      type: 'credentials',
      id: 'credentials',
      async authorize(credentials) {
        const client = await clientPromise
        const db = client.db('konto-premium')
        const collection = db.collection('users')
        const user = await collection.findOne({
          email: credentials?.email,
          password: credentials?.password
        })
        if (!user) {
          throw new Error('Użytkownik nie istnieje')
        }
        if (user) {
          return {
            email: user.email
          }
        }
        return null
      }
    })
  ]
})
