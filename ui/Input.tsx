import { TextInputProps, View } from 'react-native'
import styled from 'styled-components/native'
import { Color } from '@/ui/config'

interface InputProps extends TextInputProps {
  label?: string
  error?: string
  icon?: React.ReactNode
}

const InputContainer = styled.View({
  background: 'white',
  borderRadius: 10,
  flexDirection: 'row',
  alignItems: 'center',
})

const StyledInput = styled.TextInput({
  height: 52,
  paddingLeft: 16,
  paddingRight: 16,
  fontSize: 16,
  flex: 1,
  fontFamily: 'Outfit_500Medium',
  color: Color.GRY,
})

const Label = styled.Text({
  fontSize: 16,
  fontFamily: 'Outfit_400Regular',
  color: Color.GRY,
  opacity: 0.7,
  marginLeft: 16,
  marginBottom: 8,
})

const ErrorText = styled.Text({
  fontSize: 14,
  fontFamily: 'Outfit_400Regular',
  color: Color.ORG,
  marginTop: 8,
  marginLeft: 16,
})

export const Input = ({ label, icon, error, ...props }: InputProps) => {
  return (
    <View>
      {label && <Label>{label}</Label>}
      <InputContainer style={{ paddingLeft: icon ? 16 : 0 }}>
        {icon}
        <StyledInput {...props} />
      </InputContainer>
      {error && <ErrorText>{error}</ErrorText>}
    </View>
  )
}
