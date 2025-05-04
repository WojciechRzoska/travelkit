import { Button } from '@/lib/components/ui/button'
import { Text } from '@/lib/components/ui/text'
import { H1 } from '@/lib/components/ui/typography'
import AuthMode from '@/src/enums/AuthMode'
import login from '@api/auth/actions/login'
import appIcon from '@assets/images/appIcon.png'
import InputController from '@components/FormInputs/InputController/InputController'
import { zodResolver } from '@hookform/resolvers/zod'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useAuth } from '@store/authStore'
import { useMutation } from '@tanstack/react-query'
import useGetAuthLabels from '@views/Authentication/hooks/useGetAuthLabels'
import signInSchema from '@views/Authentication/schema/signInSchema'
import { SignIn } from '@views/Authentication/types/SignIn'
import { useRouter } from 'expo-router'
import React, { FunctionComponent } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Image, View } from 'react-native'

const SignInView: FunctionComponent = () => {
  const form = useForm<SignIn>({
    mode: 'all',
    resolver: zodResolver(signInSchema),
    defaultValues: {
      identifier: '',
      password: '',
    },
  })
  const { handleSubmit } = form
  const router = useRouter()
  const { setUser } = useAuth()

  const { mutate: signIn } = useMutation({
    mutationFn: (values: SignIn) => login(values),
    onSuccess: async (data) => {
      const user = data
      await AsyncStorage.setItem('user', JSON.stringify(user))
      setUser(user)
      router.replace('/home')
    },
    onError: (error) => {
      console.error('Login failed', error)
    },
  })

  const { linkTitle, buttonText, linkText, redirectPath } = useGetAuthLabels(
    AuthMode.signIn,
  )

  const onSignUpButtonPress = () => {
    router.push(redirectPath)
  }

  const onSubmit = handleSubmit((data) => {
    signIn(data)
  })

  return (
    <FormProvider {...form}>
      <View className="bg-background flex-1 items-center justify-center gap-4 p-10">
        <View className="w-60 h-60">
          <Image source={appIcon} className="w-full h-full object-contain" />
        </View>
        <H1>TravelKit</H1>
        <InputController fieldName="identifier" placeholder="Email" />
        <InputController
          fieldName="password"
          placeholder="Hasło"
          secureTextEntry
        />
        <Button onPress={onSubmit} className="w-full" size="lg">
          <Text>{buttonText}</Text>
        </Button>
        <View>
          <View className="flex-row items-center h-10">
            <Text className="m-0">{linkText}</Text>
            <Button
              className="!px-1"
              variant="link"
              size="sm"
              onPress={onSignUpButtonPress}
            >
              <Text>{linkTitle}</Text>
            </Button>
          </View>
          <View>
            <Button variant="link" size="sm">
              <Text>Zapomniałeś hasła?</Text>
            </Button>
          </View>
        </View>
      </View>
    </FormProvider>
  )
}

export default SignInView
