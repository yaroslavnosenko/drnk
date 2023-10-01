import { StyleProp, TextStyle, View } from 'react-native'
import WheelPicker from 'react-native-wheely'

const TextStyles: StyleProp<TextStyle> = {
  fontFamily: 'Outfit_500Medium',
}

export const TimePicker = () => {
  return (
    <View style={{ flexDirection: 'row', gap: 8 }}>
      <WheelPicker
        selectedIndex={0}
        onChange={console.log}
        options={[
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ]}
        containerStyle={{ flex: 1 }}
        itemTextStyle={TextStyles}
      />
      <View style={{ flexDirection: 'row', flex: 1, gap: 8 }}>
        <WheelPicker
          options={[
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
          ]}
          selectedIndex={0}
          onChange={console.log}
          containerStyle={{ flex: 1 }}
        />
        <WheelPicker
          options={['00', '30']}
          selectedIndex={0}
          onChange={console.log}
          containerStyle={{ flex: 1 }}
        />
        <WheelPicker
          options={['AM', 'PM']}
          selectedIndex={0}
          onChange={console.log}
          containerStyle={{ flex: 1 }}
        />
      </View>
    </View>
  )
}
