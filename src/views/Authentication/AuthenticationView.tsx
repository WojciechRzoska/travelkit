import AuthMode from '@/src/enums/AuthMode'
import SignInView from '@views/Authentication/components/SignInView'
import SignUpView from '@views/Authentication/components/SignUpView'
import React, { FunctionComponent } from 'react'

type Props = {
  authMode: AuthMode
}

const AuthenticationView: FunctionComponent<Props> = ({ authMode }) => {
  switch (authMode) {
    case AuthMode.signIn:
      return <SignInView />
    case AuthMode.signUp:
      return <SignUpView />
    default:
      return null
  }
}

export default AuthenticationView
