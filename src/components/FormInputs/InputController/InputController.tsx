import { Input } from '@/lib/components/ui/input'
import { FunctionComponent } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TextInputProps } from 'react-native'

type Props = TextInputProps & {
  fieldName: string
}

const InputController: FunctionComponent<Props> = ({ fieldName, ...props }) => {
  const { control } = useFormContext()
  return (
    <Controller
      name={fieldName}
      control={control}
      render={({ field }) => (
        <Input
          {...field}
          {...props}
          onChangeText={field.onChange}
          className="bg-inheritance"
          aria-labelledby="inputLabel"
          aria-errormessage="inputError"
        />
      )}
    />
  )
}

export default InputController
