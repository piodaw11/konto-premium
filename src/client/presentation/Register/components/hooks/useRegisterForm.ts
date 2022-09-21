import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'

import RegisterForm from 'src/client/presentation/Register/components/types/RegisterForm'
import RegisterFormSchema from 'src/client/presentation/Register/components/RegisterFormSchema'
import useRegisterNewUser from 'src/client/presentation/Register/components/hooks/useRegisterNewUser'
import Pages from 'src/client/infrastructure/enums/Pages'

const useRegisterForm = () => {
  const router = useRouter()

  const {
    handleRegisterNewUser
  } = useRegisterNewUser()

  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<RegisterForm>({
    resolver: yupResolver(RegisterFormSchema),
    criteriaMode: 'all',
    mode: 'onChange',
    defaultValues: {
      email: '',
      phone: '',
      firstName: '',
      lastName: '',
      password: '',
      passwordRepeat: ''
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
    onCloseFormHandler,
    handleRegisterNewUser
  }
}

export default useRegisterForm
