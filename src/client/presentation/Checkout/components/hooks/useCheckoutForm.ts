import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import CheckoutForm from 'src/client/presentation/Checkout/components/types/CheckoutForm'
import CheckoutFormSchema from 'src/client/presentation/Checkout/components/CheckoutForm/CheckoutFormSchema'

const useCheckoutForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<CheckoutForm>({
    resolver: yupResolver(CheckoutFormSchema),
    criteriaMode: 'all',
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: ''
    }
  })

  return {
    control,
    handleSubmit,
    errors,
    isValid
  }
}

export default useCheckoutForm
