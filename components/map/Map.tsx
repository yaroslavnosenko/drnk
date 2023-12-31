import MapView from 'react-native-maps'
import { Place } from '@/types'
import { Pin } from './Pin'
import { useState } from 'react'

const ManhattanRegion = {
  latitude: 40.754932,
  longitude: -73.984016,
  latitudeDelta: 0.03,
  longitudeDelta: 0.03,
}

interface MapProps {
  places: Place[]
  onTouchStart: () => void
}

export const Map = ({ places, onTouchStart }: MapProps) => {
  const [activePlace, setActivePlace] = useState<Place | null>(null)

  const onPinPress = (place: Place) => {
    setActivePlace(place)
  }

  return (
    <MapView
      initialRegion={ManhattanRegion}
      showsCompass={false}
      showsPointsOfInterest={false}
      showsUserLocation={true}
      pitchEnabled={false}
      onTouchStart={onTouchStart}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
    >
      {places.map((place) => {
        const { id, latitude, longitude, hhFinish } = place
        return (
          <Pin
            key={id}
            latitude={latitude}
            longitude={longitude}
            text={hhFinish}
            onPress={() => onPinPress(place)}
            active={id === activePlace?.id}
          />
        )
      })}
    </MapView>
  )
}
