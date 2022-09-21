import { string, object, SchemaOf, ref } from 'yup'

import RegisterForm from 'src/client/presentation/Register/components/types/RegisterForm'

const RegisterFormSchema: SchemaOf<RegisterForm> = object().shape({
  email: string()
    .email('Podaj właściwy adres e-mail')
    .required('Pole wymagane'),
  phone: string()
    .min(9, 'Podaj numer jest za krótki')
    .max(9, 'Podaj numer jest za długi')
    .required('Pole wymagane'),
  firstName: string()
    .required('Pole wymagane'),
  lastName: string()
    .required('Pole wymagane'),
  password: string()
    .min(6, 'Hasło musi mieć co najmniej 6 znaków')
    .required('Pole wymagane'),
  passwordRepeat: string()
    .oneOf([ref('password'), null], 'Hasła muszą być takie same')
    .required('Pole wymagane')
})

export default RegisterFormSchema
