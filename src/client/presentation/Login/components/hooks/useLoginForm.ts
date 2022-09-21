import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'

import LoginForm from 'src/client/presentation/Login/components/types/LoginForm'
import LoginFormSchema from 'src/client/presentation/Login/components/LoginFormSchema'
import useSignIn from 'src/client/presentation/Login/components/hooks/useSignIn'
import Pages from 'src/client/infrastructure/enums/Pages'

const useLoginForm = () => {
  const router = useRouter()

  const {
    handleSignIn
  } = useSignIn()

  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<LoginForm>({
    resolver: yupResolver(LoginFormSchema),
    criteriaMode: 'all',
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onCloseFormHandler = () => {
    router.push(Pages.Home)
  }

  return {
    control,
    handleSubmit,
    errors,
    isValid,
    handleSignIn,
    onCloseFormHandler
  }
}

export default useLoginForm
