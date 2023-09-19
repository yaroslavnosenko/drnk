import { BlurView } from 'expo-blur'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { SlidersHorizontal } from 'lucide-react-native'
import { Color } from '@/ui'

const Container = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 8,
})

const Name = styled.Text({
  fontSize: 22,
  fontWeight: 'bold',
  paddingLeft: 12,
  fontFamily: 'Outfit_500Medium',
})
const IconButton = styled.TouchableOpacity({ padding: 12 })

export const Header = () => {
  return (
    <SafeAreaView edges={{ bottom: 'off', top: 'additive' }}>
      <BlurView
        style={{
          backgroundColor: Color.WYT + 'CC',
          overflow: 'hidden',
          borderRadius: 16,
          marginHorizontal: 16,
          marginTop: 4,
          borderWidth: 1,
          borderColor: Color.GRY + '1A',
        }}
      >
        <Container>
          <Name>Drnk</Name>
          <IconButton onPress={() => router.push('/auth')}>
            <SlidersHorizontal color="black" size={24} strokeWidth={2.5} />
          </IconButton>
        </Container>
      </BlurView>
    </SafeAreaView>
  )
}
