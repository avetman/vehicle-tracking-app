import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useState, useEffect} from 'react';
import VehicleList from '../../components/common/VehicleList';
import useVehicles from '../../hooks/useVehicles';
import SwitchButton from '../../components/common/SwitchButton';
import VehicleMap from '../../components/common/VehicleMap';
import VehicleFilter from '../../components/VehicleFilter';
const HomeTab = () => {
  const {vehicles, loading, error} = useVehicles();
  const [viewMode, setViewMode] = useState('list');
  const [allVehicles, setAllVehicles] = useState(vehicles);
  const [filteredVehicles, setFilteredVehicles] = useState([]);

  useEffect(() => {
    if (vehicles) {
      setAllVehicles(vehicles);
    }
  }, [vehicles]);

  useEffect(() => {
    if (filteredVehicles.length > 0) {
      setAllVehicles(filteredVehicles);
    } else {
      setAllVehicles(vehicles);
    }
  }, [vehicles, filteredVehicles]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContent}>
        <VehicleFilter
          vehicles={vehicles}
          setFilteredVehicles={setFilteredVehicles}
        />

        {viewMode === 'list' ? (
          <VehicleList data={allVehicles} />
        ) : (
          <View style={{flex: 1, justifyContent: 'center'}}>
            <VehicleMap vehicles={allVehicles} />
          </View>
        )}

        <View style={styles.buttonContainer}>
          <SwitchButton
            value={viewMode === 'map'}
            onValueChange={value => setViewMode(value ? 'map' : 'list')}
            iconMap="map"
            iconList="list"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  scrollContent: {
    flexGrow: 1,
  },
  buttonContainer: {
    position: 'absolute',
    left: 16,
    bottom: 16,
    borderRadius: 16,
    backgroundColor: '#e0e0e0',
  },
});
export default HomeTab;
