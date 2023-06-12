import {View, Text, StyleSheet, Platform, Pressable} from 'react-native';
import {useNavigation} from "@react-navigation/native";

const VehicleItem = ({data}) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('Vehicle', {vehicleId: data.id, vehicle: data});
  };
  return (
      <Pressable onPress={handlePress}>
        <View style={styles.card}>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.name}>{data.driver_name}</Text>
          <Text style={styles.category}>{data.category}</Text>
        </View>
      </Pressable>

  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
  },
  title: {
    fontSize: 18,
  },
  category: {
    fontSize: 16,
    fontWeight: '300',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    ...Platform.select({
      android: {
        elevation: 1,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
    }),
  },
});

export default VehicleItem;
