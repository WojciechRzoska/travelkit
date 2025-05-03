import signInSchema from '@views/Authentication/schema/signInSchema';
import { z } from 'zod';

type SignIn = z.infer<typeof signInSchema>;

export type { SignIn };
