import { signIn } from 'next-auth/react'
import LoginForm from 'src/client/presentation/Login/components/types/LoginForm'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

const useSignIn = () => {
  const router = useRouter()

  const handleSignIn = async (data: LoginForm) => {
    await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password
    }).then((response) => {
      if (response?.status === 200) {
        router.push('/moje-konto')
      } else {
        toast.error(response?.error)
      }
    })
  }

  return {
    handleSignIn
  }
}
export default useSignIn
