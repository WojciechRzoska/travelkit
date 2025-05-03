import AuthMode from '@/src/enums/AuthMode';
import AuthenticationView from '@views/Authentication';

export default function SignUp() {
  return <AuthenticationView authMode={AuthMode.signUp} />;
}
