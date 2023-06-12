import {
  ScrollView,
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import VehicleItem from './VehicleItem';
import {useCallback} from 'react';

const VehicleList = ({data}) => {
  const renderItem = useCallback(({item}) => <VehicleItem data={item} />, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        removeClippedSubviews={true}
        keyExtractor={item => item.id.toString()}
        horizontal={false}
        nestedScrollEnabled
        scrollsToTop={true}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {},
});
export default VehicleList;
