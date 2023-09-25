import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
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
  panOffset: number
  paddingTop: number
}

export const useLayerLayout = ({
  positions: { top, middle, bottom },
  panOffset,
  paddingTop,
}: LayoutConfig) => {
  const [layerPosition, setLayerPosition] = useState<number>(middle)
  const animation = useRef(new Animated.Value(middle))
  const currentPosition = useRef<number>(middle)
  const stickPosition = useRef<number>(middle)
  const isOffsetNull = useRef<boolean>(true)

  useEffect(() => {
    const listener = animation.current.addListener(({ value }) => {
      currentPosition.current = value
    })
    return () => {
      animation.current.removeListener(listener)
    }
  }, [animation])

  const moveToPosition = useCallback(
    (toValue: number) => {
      stickPosition.current = toValue
      Animated.spring(animation.current, {
        restSpeedThreshold: 0.1,
        restDisplacementThreshold: 0.1,
        useNativeDriver: false,
        toValue,
      }).start(() => setLayerPosition(toValue))
    },
    [animation]
  )

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      isOffsetNull.current = event.nativeEvent.contentOffset.y === 0
    },
    []
  )

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
        animation.current.setValue(stickPosition.current + gestureState.dy)
      },
      onPanResponderRelease() {
        const position = currentPosition.current
        if (position < middle - panOffset) {
          moveToPosition(top)
        } else if (position > middle + panOffset) {
          moveToPosition(bottom)
        } else {
          moveToPosition(middle)
        }
      },
    })
  )

  const paddingResult = useMemo(
    () =>
      animation.current.interpolate({
        inputRange: [0, middle],
        outputRange: [paddingTop, 0],
      }),
    [animation]
  )

  const layerStyle: StyleProp<ViewStyle> = useMemo(
    () => ({
      position: 'absolute',
      width: '100%',
      height: '100%',
      transform: [{ translateY: animation.current }],
    }),
    [animation]
  )

  return {
    onScroll,
    moveToPosition,
    layerPosition,
    panHandlers: pan.current.panHandlers,
    paddingTop: paddingResult,
    layerStyle,
  }
}
