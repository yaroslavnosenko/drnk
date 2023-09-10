import {
  Button,
  HStack,
  Heading,
  VStack,
  ButtonIcon,
  MenuIcon,
} from '@gluestack-ui/themed'
import { BlurView } from 'expo-blur'

export const Header = () => {
  return (
    <BlurView
      style={{
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#ffffffbb',
      }}
    >
      <VStack borderRadius="$xl" style={{}}>
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
          >
            <ButtonIcon size="xl" as={MenuIcon} />
          </Button>
        </HStack>
      </VStack>
    </BlurView>
  )
}
