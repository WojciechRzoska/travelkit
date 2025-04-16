import TextClassContext from '@components/Text/constants/TextClassContext';
import textVariants from '@components/Text/constants/textVariants';
import { VariantProps } from 'class-variance-authority';
import { cn } from 'lib/cn';
import * as React from 'react';
import { Text as RNText } from 'react-native';

const Text = ({
  className,
  variant,
  color,
  ...props
}: React.ComponentPropsWithoutRef<typeof RNText> &
  VariantProps<typeof textVariants>) => {
  const textClassName = React.useContext(TextClassContext);
  return (
    <RNText
      className={cn(textVariants({ variant, color }), textClassName, className)}
      {...props}
    />
  );
};

export default Text;
