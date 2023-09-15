import { BlurView } from 'expo-blur'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { User } from 'lucide-react-native'

const Container = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 8,
})

const Name = styled.Text({ fontSize: 22, fontWeight: 'bold', paddingLeft: 12 })
const IconButton = styled.TouchableOpacity({ padding: 12 })

export const Header = () => {
  return (
    <SafeAreaView edges={{ bottom: 'off', top: 'additive' }}>
      <BlurView
        style={{
          backgroundColor: '#ffffffbb',
          overflow: 'hidden',
          borderRadius: 16,
          marginHorizontal: 16,
          marginTop: 4,
        }}
      >
        <Container>
          <Name>Drnk</Name>
          <IconButton onPress={() => router.push('/auth')}>
            <User color="black" size={24} strokeWidth={2.5} />
          </IconButton>
        </Container>
      </BlurView>
    </SafeAreaView>
  )
}
