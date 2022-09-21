import { string, object, SchemaOf } from 'yup'

import CheckoutForm from 'src/client/presentation/Checkout/components/types/CheckoutForm'

const CheckoutFormSchema: SchemaOf<CheckoutForm> = object().shape({
  firstName: string().required('Pole wymagane'),
  lastName: string().required('Pole wymagane'),
  email: string()
    .email('Podaj właściwy adres e-mail')
    .required('Pole wymagane')
})

export default CheckoutFormSchema
