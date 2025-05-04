import { Button } from '@/lib/components/ui/button'
import { Text } from '@/lib/components/ui/text'
import { H1 } from '@/lib/components/ui/typography'
import AuthMode from '@/src/enums/AuthMode'
import createUser from '@api/auth/actions/createUser'
import InputController from '@components/FormInputs/InputController/InputController'
import { zodResolver } from '@hookform/resolvers/zod'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useMutation } from '@tanstack/react-query'
import useGetAuthLabels from '@views/Authentication/hooks/useGetAuthLabels'
import signUpSchema from '@views/Authentication/schema/signUpSchema'
import { SignUp } from '@views/Authentication/types/SignUp'
import { useRouter } from 'expo-router'
import React, { FunctionComponent } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Image, View } from 'react-native'

const SignUpView: FunctionComponent = () => {
  const form = useForm<SignUp>({
    mode: 'all',
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      username: '',
      password: '',
    },
  })
  const { handleSubmit } = form
  const router = useRouter()

  const { mutate: signUp } = useMutation({
    mutationFn: (values: SignUp) => createUser(values),
    onSuccess: async (data) => {
      const user = data
      await AsyncStorage.setItem('user', JSON.stringify(user))

      router.replace('/home')
    },
    onError: (error) => {
      console.error('Login failed', error)
    },
  })

  const { linkTitle, buttonText, linkText, redirectPath } = useGetAuthLabels(
    AuthMode.signUp,
  )

  const onSignUpButtonPress = () => {
    router.push(redirectPath)
  }

  const onSubmit = handleSubmit((data) => {
    signUp(data)
  })

  return (
    <FormProvider {...form}>
      <View className="bg-background flex-1 items-center justify-center gap-4 p-10">
        <View className="w-60 h-60">
          <Image
            source={{ uri: 'app-icon' }}
            className="w-full h-full object-contain"
          />
        </View>
        <H1>TravelKit</H1>
        <InputController fieldName="username" placeholder="Nazwa użytkownika" />
        <InputController fieldName="email" placeholder="Email" />
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
        </View>
      </View>
    </FormProvider>
  )
}

export default SignUpView
