import {StyleSheet, View, Text, Switch, TouchableOpacity} from 'react-native';
import {useState, useContext} from 'react';
import {LanguageContext} from "../context/LanguageContext";

const VehicleFilter = ({vehicles,setFilteredVehicles}) => {
	const { language } = useContext(LanguageContext);
	console.log(language)
  const [filters, setFilters] = useState({
    filterCargo: false,
    filterPassenger: false,
    filterSpecial: false,
  });

  const applyFilters = () => {
    const filtered = vehicles.filter(vehicle => {
      if (filters.filterCargo && vehicle.category === 'Cargo') {
        return true;
      }
      if (filters.filterPassenger && vehicle.category === 'Passenger') {
        return true;
      }
      if (filters.filterSpecial && vehicle.category === 'Special') {
        return true;
      }
      return false;
    });
	setFilteredVehicles(filtered);
  };
	const handleFilterChange = (filterName, value) => {
		setFilters(prevFilters => ({
			...prevFilters,
			[filterName]: value,
		}));
	};
  return (
    <View style={styles.container}>
      <View style={styles.filters}>
	      <View>
		      <Text>{language === 'ru' ? 'Грузовой' : 'Cargo'}</Text>
		      <Switch
			      value={filters.filterCargo}
			      onValueChange={value => handleFilterChange('filterCargo', value)}
		      />
	      </View>
	      <View>
		      <Text>{language === 'ru' ? 'Пассажирский' : 'Passenger'}</Text>

		      <Switch
			      value={filters.filterPassenger}
			      onValueChange={value => handleFilterChange('filterPassenger', value)}
		      />
	      </View>
	      <View>
		      <Text>{language === 'ru' ? 'Спецтранспорт' : 'Special'}</Text>

		      <Switch
			      value={filters.filterSpecial}
			      onValueChange={value => handleFilterChange('filterSpecial', value)}
		      />
	      </View>
      </View>
	    <TouchableOpacity onPress={applyFilters} style={styles.button}>
		    <Text>Применить</Text>
	    </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
	container: {

	},
	filters: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding:10,
	},
	button: {
		borderRadius: 12,
		borderWidth: 2,
		fontSize:20,
		fontWeight: '300',
		borderColor: 'tomato',
		marginHorizontal:10,
		padding:10,
	}

})
export default VehicleFilter;
