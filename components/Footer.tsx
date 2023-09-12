import { Box, Button, ButtonText, Text } from '@gluestack-ui/themed'
import { BlurView } from 'expo-blur'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Footer = () => {
  return (
    <BlurView style={{ backgroundColor: '#ffffffbb' }}>
      <SafeAreaView edges={{ top: 'off', bottom: 'additive' }}>
        <Box px="$4" pt="$4" pb="$2">
          <Button
            borderRadius="$full"
            bgColor="$black"
            size="xl"
            onPress={() => router.push('/map/results')}
          >
            <ButtonText fontSize="$md">18 results</ButtonText>
          </Button>
        </Box>
      </SafeAreaView>
    </BlurView>
  )
}
