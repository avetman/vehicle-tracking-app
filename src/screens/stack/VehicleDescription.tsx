import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import VehicleMap from '../../components/common/VehicleMap';
import {useCallback, useEffect, useState} from 'react';
const VehicleDescription = () => {
  const route = useRoute();
  const {vehicleId, vehicle} = route.params;

  const handleCallDriver = () => {
    Linking.openURL(`tel:${vehicle.phone_number}`);
  };
  const handleOpenWhatsApp = useCallback(async () => {
    const phoneNumber = vehicle.phone_number;
    const message = encodeURIComponent(
      'Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе',
    );

    let url;
    if (Platform.OS === 'ios') {
      url = `sms:${phoneNumber}&body=${message}`;
    } else {
      url = `sms:${phoneNumber}?body=${message}`;
    }

    const whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${message}`;

    try {
      const canOpenWhatsApp = await Linking.canOpenURL(whatsappUrl);
      if (canOpenWhatsApp) {
        await Linking.openURL(whatsappUrl);
      } else {
        await Linking.openURL(url);
      }
    } catch (error) {
      Alert.alert(
        'Ошибка',
        'Не удалось открыть приложение для отправки сообщения.',
      );
    }
  }, [vehicle.phone_number]);


  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{vehicle.name}</Text>
        <Text style={styles.name}>{vehicle.driver_name}</Text>
        <Text style={styles.category}>{vehicle.category}</Text>
	      <Text style={styles.category}><Icon name="call" size={16} color={'black'} /> {vehicle.phone_number}</Text>
        <TouchableOpacity style={styles.callButton} onPress={handleCallDriver}>
          <Icon name="call" size={24} color={'black'} />
          <Text style={{color: '#000', fontSize: 18}}>Позвонить</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.callButton}
          onPress={handleOpenWhatsApp}>
          <Icon name="chatbox-ellipses" size={24} color={'black'} />
          <Text style={{color: '#000', fontSize: 18}}>Написать</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.map}>
        <VehicleMap vehicles={vehicle} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
  },
  title: {
    fontSize: 18,
	  color: 'black',
  },
  category: {
    fontSize: 16,
    fontWeight: '400',
	  color: 'black',
	  marginVertical:5,
  },
  callButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
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
  map: {
    flex: 1,
  },
});
export default VehicleDescription;
