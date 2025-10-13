import { GOOGLE_MAPS_API_KEY } from '@env';
import MapView from '../../react-native-maps';

export default function MapScreen() {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      googleMapsApiKey={GOOGLE_MAPS_API_KEY}
    />
  );
}