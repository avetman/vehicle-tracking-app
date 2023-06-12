import {createStackNavigator} from '@react-navigation/stack';
import MainBottomNav from '../tabs';
import VehicleDescription from "./VehicleDescription";
const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={MainBottomNav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Vehicle"
        component={VehicleDescription}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
