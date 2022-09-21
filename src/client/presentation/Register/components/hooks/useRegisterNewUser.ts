import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

import RegisterForm from 'src/client/presentation/Register/components/types/RegisterForm'
import useRegisterForm from 'src/client/presentation/Register/components/hooks/useRegisterForm'

const useRegisterNewUser = () => {
  const [newUser, setNewUser] = useState(undefined as RegisterForm | undefined)

  const router = useRouter()

  const handleRegisterNewUser = (data: RegisterForm) => {
    setNewUser(data)
  }

  useEffect(() => {
      if (newUser) {
        axios.post('/api/auth/register', newUser)
          .then(() => {
            toast.success('Pomyślnie zarejestrowano użytkownika')
            router.push('/moje-konto')
          })
          .catch((error) => {
            toast.error(error.response.data.message)
          })
      }
  }, [newUser])

  return {
    newUser,
    handleRegisterNewUser
  }
}

export default useRegisterNewUser
