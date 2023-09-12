import {
  Button,
  HStack,
  Heading,
  VStack,
  ButtonIcon,
  SettingsIcon,
  Box,
} from '@gluestack-ui/themed'
import { BlurView } from 'expo-blur'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Header = () => {
  return (
    <SafeAreaView edges={{ bottom: 'off', top: 'additive' }}>
      <Box px="$3">
        <BlurView
          style={{
            backgroundColor: '#ffffffbb',
            overflow: 'hidden',
            borderRadius: 20,
          }}
        >
          <VStack>
            <HStack p="$4" justifyContent="space-between">
              <Heading color="black" size="lg">
                Drnk.
              </Heading>
              <Button
                size="md"
                variant="link"
                action="secondary"
                isDisabled={false}
                isFocusVisible={false}
                h="$8"
                w="$8"
                onPress={() => router.push('/auth')}
              >
                <ButtonIcon size="xl" as={SettingsIcon} />
              </Button>
            </HStack>
          </VStack>
        </BlurView>
      </Box>
    </SafeAreaView>
  )
}
