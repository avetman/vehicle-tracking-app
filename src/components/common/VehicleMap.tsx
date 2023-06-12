import {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {IRegion, IVehicle} from '../../types';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = height / width;

const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
interface VehicleMapProps {
  vehicles: IVehicle[];
}
const INITIAL_REGION: IRegion = {
  latitude: 40.1872,
  longitude: 44.5152,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

console.log(LONGITUDE_DELTA);
const VehicleMap = ({vehicles}: VehicleMapProps) => {
  const [initialRegion, setInitialRegion] = useState(INITIAL_REGION);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={initialRegion}
        provider={PROVIDER_GOOGLE}>
        {vehicles && Array.isArray(vehicles) ? (
          vehicles.map(vehicle => (
            <Marker
              key={vehicle.id}
              coordinate={{
                latitude: vehicle.location.latitude,
                longitude: vehicle.location.longitude,
              }}
              title={vehicle.name}
              description={vehicle.driver_name}
            />
          ))
        ) : (
          <Marker
            coordinate={{
              latitude: vehicles.location.latitude,
              longitude: vehicles.location.longitude,
            }}
            title={vehicles.name}
            description={vehicles.driver_name}
          />
        )}
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
});
export default VehicleMap;
