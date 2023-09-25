import { useRef } from 'react'
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  PanResponder,
  StyleProp,
  ViewStyle,
} from 'react-native'

interface LayoutConfig {
  positions: {
    top: number
    middle: number
    bottom: number
  }
  offset: number
}

export const useLayerLayout = ({
  positions: { top, middle, bottom },
  offset,
}: LayoutConfig) => {
  const animation = useRef(new Animated.Value(middle)).current
  const currentPosition = useRef<number>(middle)
  const stickPosition = useRef<number>(middle)
  const isOffsetNull = useRef<boolean>(true)

  animation.addListener(({ value }) => {
    currentPosition.current = value
  })

  const moveToPosition = (toValue: number) => {
    stickPosition.current = toValue
    Animated.spring(animation, { toValue, useNativeDriver: true }).start()
  }

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    isOffsetNull.current = event.nativeEvent.contentOffset.y === 0
  }

  const pan = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        if (stickPosition.current === top) {
          if (gestureState.dy < 0 || !isOffsetNull.current) {
            return false
          }
        }
        return true
      },
      onPanResponderMove(_, gestureState) {
        animation.setValue(stickPosition.current + gestureState.dy)
      },
      onPanResponderRelease() {
        const position = currentPosition.current
        if (position < middle - offset) {
          moveToPosition(top)
        } else if (position > middle + offset) {
          moveToPosition(bottom)
        } else {
          moveToPosition(middle)
        }
      },
    })
  ).current

  const panHandlers = pan.panHandlers

  const layerStyle: StyleProp<ViewStyle> = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    transform: [{ translateY: animation }],
  }

  return {
    panHandlers,
    onScroll,
    layerStyle,
  }
}
