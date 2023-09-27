import { Button, Color } from '@/ui'
import { opacity } from '@/utils'
import { BlurView } from 'expo-blur'
import { Modal, Pressable, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface Props {
  onClose: () => void
  visible: boolean
}

export const TimePickerModal = ({ visible, onClose }: Props) => {
  const { bottom } = useSafeAreaInsets()

  return (
    <Modal transparent={true} visible={visible}>
      <BlurView
        intensity={5}
        style={{
          backgroundColor: opacity(Color.BLK, 0.5),
          flex: 1,
        }}
      >
        <Pressable style={{ flex: 1 }} onPress={onClose} />
        <View
          style={{
            backgroundColor: Color.WYT,
            borderTopRightRadius: 24,
            borderTopLeftRadius: 24,
            paddingBottom: bottom + 16,
            paddingTop: 24,
            paddingHorizontal: 24,
          }}
        >
          <Button size="xl" onPress={onClose}>
            Save
          </Button>
        </View>
      </BlurView>
    </Modal>
  )
}
