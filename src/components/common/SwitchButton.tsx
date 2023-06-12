import {View, Switch, StyleSheet,TouchableOpacity} from 'react-native';
import {useCallback, memo} from "react";
import Icon from 'react-native-vector-icons/Ionicons';
const SwitchButton = ({value, onValueChange, iconMap, iconList}) => {

    const handleChange = useCallback(() => {
        onValueChange(!value);
    }, [value, onValueChange]);

  return (
    <View style={styles.switchButton}>
      <Switch
          value={value}
          onValueChange={onValueChange}
          trackColor={{false: 'rgba(215,58,35,1)', true: '#fff'}}
          thumbColor={value ? 'rgba(215,58,35,1)' : '#f4f3f4'}
      />
        <TouchableOpacity onPress={handleChange}>
            <Icon
                name={value ? iconMap : iconList}
                size={24}
                color={'tomato'}
            />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  switchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
});
export default memo(SwitchButton);
