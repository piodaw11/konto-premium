import { string, object, SchemaOf } from 'yup'

import LoginForm from 'src/client/presentation/Login/components/types/LoginForm'

const LoginFormSchema: SchemaOf<LoginForm> = object().shape({
  email: string()
    .email('Podaj właściwy adres e-mail')
    .required('Pole wymagane'),
  password: string()
    .min(6, 'Hasło musi mieć co najmniej 6 znaków')
    .required('Pole wymagane')
})

export default LoginFormSchema
