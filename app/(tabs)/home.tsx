import { Color } from '@/ui'
import { ScrollView, Text } from 'react-native'

export default function HomeTab() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: Color.WYT, paddingTop: 250 }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={{ fontSize: 72 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </ScrollView>
  )
}
