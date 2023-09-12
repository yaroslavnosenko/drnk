import { Box, Text } from '@gluestack-ui/themed'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { Place } from '../types'

const ManhattanRegion = {
  latitude: 40.754932,
  longitude: -73.984016,
  latitudeDelta: 0.03,
  longitudeDelta: 0.03,
}

interface MapProps {
  places: Place[]
}

export const Map = ({ places }: MapProps) => {
  return (
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
      {places.map(({ id, latitude, longitude, hhFinish }) => (
        <Marker key={id} coordinate={{ latitude, longitude }}>
          <Box bg="black" p="$1" px="$2" borderRadius="$full">
            <Text color="white" fontWeight="$medium" size="2xs">
              {hhFinish}
            </Text>
          </Box>
        </Marker>
      ))}
    </MapView>
  )
}
