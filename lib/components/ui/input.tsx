import { cn } from '@/lib/utils'
import * as React from 'react'
import { TextInput, type TextInputProps } from 'react-native'

const Input = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  TextInputProps
>(({ className, ...props }, ref) => {
  return (
    <TextInput
      ref={ref}
      className={cn(
        'h-12 w-full rounded-md border border-gray-400 bg-white px-3 text-black placeholder:text-gray-500',
        props.editable === false && 'opacity-50',
        className,
      )}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export { Input }
