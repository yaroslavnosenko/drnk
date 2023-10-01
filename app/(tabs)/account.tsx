import { useState } from 'react'
import { View } from 'react-native'
import WheelPicker from 'react-native-wheely'

export default function AccountTab() {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
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
      />
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
      />
      <WheelPicker
        options={['00', '30']}
        selectedIndex={0}
        onChange={console.log}
      />
      <WheelPicker
        options={['AM', 'PM']}
        selectedIndex={0}
        onChange={console.log}
      />
    </View>
  )
}
