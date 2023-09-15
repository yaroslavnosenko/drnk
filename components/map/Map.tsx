import MapView from 'react-native-maps'
import { Place } from '@/types'
import { Pin } from './Pin'

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
        <Pin
          key={id}
          latitude={latitude}
          longitude={longitude}
          text={hhFinish}
        />
      ))}
    </MapView>
  )
}
