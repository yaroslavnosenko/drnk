import { Color } from '@/ui'
import { BlurView } from 'expo-blur'
import { User2, Heart, Compass } from 'lucide-react-native'
import { ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { router, usePathname } from 'expo-router'
import { TouchableWithoutFeedback } from 'react-native'

const Container = styled.View({
  height: 56,
  flexDirection: 'row',
  justifyContent: 'space-around',
})

const Button = styled.View({
  height: 56,
  alignItems: 'center',
  justifyContent: 'flex-end',
  transition: 'none',
})

const ButtonLabel = styled.Text({
  marginTop: 2,
  fontSize: 12,
  fontFamily: 'Outfit_500Medium',
})

interface TabButtonProps {
  active: boolean
  tab: string
  label: string
  icon: ReactNode
}

const TabButton = ({ active, tab, icon, label }: TabButtonProps) => {
  return (
    <TouchableWithoutFeedback onPress={() => router.replace('/' + tab)}>
      <Button style={{ opacity: active ? 1 : 0.5, flex: 1 }}>
        {icon}
        <ButtonLabel>{label}</ButtonLabel>
      </Button>
    </TouchableWithoutFeedback>
  )
}

export const TabBar = () => {
  const path = usePathname()
  return (
    <BlurView
      style={{
        backgroundColor: Color.WYT + 'CC',
        overflow: 'hidden',
        borderTopWidth: 0.5,
        borderTopColor: Color.GRY + '1A',
      }}
    >
      <SafeAreaView edges={{ bottom: 'additive', top: 'off' }}>
        <Container>
          <TabButton
            tab={'favorites'}
            label={'Favorites'}
            active={path.includes('favorites')}
            icon={<Heart color={Color.GRY} strokeWidth={2.5} />}
          />
          <TabButton
            tab={'home'}
            label={'Home'}
            active={path.includes('home')}
            icon={<Compass color={Color.GRY} strokeWidth={2.5} />}
          />
          <TabButton
            tab={'account'}
            label={'Account'}
            active={path.includes('account')}
            icon={<User2 color={Color.GRY} strokeWidth={2.5} />}
          />
        </Container>
      </SafeAreaView>
    </BlurView>
  )
}
