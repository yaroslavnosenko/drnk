import { Box, Text } from '@gluestack-ui/themed'
import MapView, { Marker } from 'react-native-maps'
import { Header } from '../../components'
import { SafeAreaView } from 'react-native-safe-area-context'

const ManhattanRegion = {
  latitude: 40.754932,
  longitude: -73.984016,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
}

export default function MapScreen() {
  return (
    <Box width="100%" height="100%" bg="white">
      <MapView
        initialRegion={ManhattanRegion}
        showsCompass={false}
        showsPointsOfInterest={false}
        showsUserLocation={true}
        pitchEnabled={false}
        style={{
          position: 'absolute',
          width: '100%',
          height: '110%',
        }}
      >
        <Marker
          coordinate={{
            latitude: ManhattanRegion.latitude,
            longitude: ManhattanRegion.longitude,
          }}
        >
          <Box bg="black" p="$1" px="$2" borderRadius="$full">
            <Text color="white" fontWeight="$medium" size="2xs">
              9 PM
            </Text>
          </Box>
        </Marker>
        <Marker
          coordinate={{
            latitude: ManhattanRegion.latitude + 0.005,
            longitude: ManhattanRegion.longitude,
          }}
        >
          <Box bg="black" p="$1" px="$2" borderRadius="$full">
            <Text color="white" fontWeight="$medium" size="2xs">
              5 PM
            </Text>
          </Box>
        </Marker>
        <Marker
          coordinate={{
            latitude: ManhattanRegion.latitude,
            longitude: ManhattanRegion.longitude + 0.005,
          }}
        >
          <Box bg="black" p="$1" px="$2" borderRadius="$full">
            <Text color="white" fontWeight="$medium" size="2xs">
              5 PM
            </Text>
          </Box>
        </Marker>
      </MapView>
      <SafeAreaView>
        <Header />
      </SafeAreaView>
    </Box>
  )
}
