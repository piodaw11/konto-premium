import Layout from 'src/client/infrastructure/components/Layout/Layout'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Button } from '@mui/material'
import Pages from 'src/client/infrastructure/enums/Pages'
import { toast } from 'react-toastify'

const MyAccountView = () => {
  const {
    data: session, status
  } = useSession()

  const router = useRouter()
  console.log(session)
  if (status === 'unauthenticated') {
    router.push(Pages.Login)
  }

  const signOutHandler = () => {
    signOut().then(() => {
      router.push(Pages.Home)
      toast.success('Pomyślnie wylogowano')
    })
  }

  return (
    <Layout>
      <h1>MyAccountView</h1>
      <Button style={{ marginTop: '80px' }} onClick={signOutHandler}>Wyloguj się</Button>
    </Layout>
  )
}

export default MyAccountView
