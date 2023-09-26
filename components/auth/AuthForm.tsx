import { Button, Color, Google, Input } from '@/ui'
import { Mail } from 'lucide-react-native'
import { View } from 'react-native'
import { useForm, Controller } from 'react-hook-form'

export interface AuthFormInput {
  email: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface AuthFormProps {
  onSubmit: (data: AuthFormInput) => void
  onSignInWithGoogle: () => void
}

export const AuthForm = ({ onSignInWithGoogle, onSubmit }: AuthFormProps) => {
  const handleGoogle = () => onSignInWithGoogle()

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<AuthFormInput>({ mode: 'onBlur' })

  return (
    <>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value, onBlur } }) => (
          <Input
            editable={!isSubmitSuccessful}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            placeholder="you@email.com"
            label="Email"
            autoFocus
            icon={<Mail color={Color.BLK} strokeWidth={2.5} />}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            error={errors.email?.message}
          />
        )}
        rules={{
          required: true,
          pattern: {
            value: EMAIL_REGEX,
            message: 'Invalid email address.',
          },
        }}
      />
      <Button
        disabled={isSubmitSuccessful}
        onPress={handleSubmit(onSubmit)}
        style={{ marginTop: 16 }}
        disabledText={'...'}
      >
        Continue with email
      </Button>
      <View
        style={{
          height: 0.5,
          backgroundColor: Color.BLK,
          opacity: 0.4,
          marginVertical: 16,
          marginHorizontal: 16,
        }}
      />
      <Button
        onPress={handleGoogle}
        bg="white"
        color={Color.BLK}
        icon={<Google />}
        disabled={isSubmitSuccessful}
      >
        Sign in with Google
      </Button>
    </>
  )
}
