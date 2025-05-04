import AuthMode from '@/src/enums/AuthMode'
import AuthenticationView from '@views/Authentication'

export default function SignIn() {
  return <AuthenticationView authMode={AuthMode.signIn} />
}
