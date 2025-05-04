import { z } from 'zod'

const signUpSchema = z.object({
  username: z.string().min(3, {
    message: 'Nazwa użytkownika musi mieć co najmniej 3 znaki',
  }),
  email: z.string().email({
    message: 'Niepoprawny adres e-mail',
  }),
  password: z.string(),
})

export default signUpSchema
