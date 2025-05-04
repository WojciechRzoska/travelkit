import AuthMode from '@/src/enums/AuthMode'

const useGetAuthVersion = (authMode: AuthMode) => {
  const labels = {
    [AuthMode.signIn]: {
      linkTitle: 'Zarejestruj się',
      buttonText: 'Zaloguj',
      linkText: 'Nie masz jeszcze konta?',
      redirectPath: '/signUp',
    },
    [AuthMode.signUp]: {
      linkTitle: 'Zaloguj się',
      buttonText: 'Zarejestruj',
      linkText: 'Masz już konto?',
      redirectPath: '/signIn',
    },
  } as const

  return labels[authMode]
}

export default useGetAuthVersion
