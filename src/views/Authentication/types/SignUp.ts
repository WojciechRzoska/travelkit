import signUpSchema from '@views/Authentication/schema/signUpSchema'
import { z } from 'zod'

type SignUp = z.infer<typeof signUpSchema>

export type { SignUp }
