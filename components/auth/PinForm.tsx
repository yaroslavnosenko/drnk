import { Button, Color } from '@/ui'
import { PinInput } from '@/ui/PinInput'
import { useState } from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

interface PinFormProps {
  onPinSubmit: (pin: string) => void
  onResend: () => void
  onBack: () => void
}

const StyledTextButton = styled.Text({
  color: Color.BLK,
  opacity: 0.7,
  fontSize: 16,
  fontFamily: 'Outfit_400Regular',
})

export const PinForm = ({ onPinSubmit, onBack }: PinFormProps) => {
  const [pin, setPin] = useState<string>('')
  return (
    <View>
      <PinInput onPinSubmit={setPin} />
      <Button
        style={{ marginTop: 32 }}
        disabled={!pin}
        onPress={() => onPinSubmit(pin)}
      >
        Verify
      </Button>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 24,
        }}
      >
        <TouchableOpacity onPress={onBack}>
          <StyledTextButton>Back</StyledTextButton>
        </TouchableOpacity>
        <TouchableOpacity>
          <StyledTextButton>Resend in 60s</StyledTextButton>
        </TouchableOpacity>
      </View>
    </View>
  )
}
