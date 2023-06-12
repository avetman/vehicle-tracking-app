import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from '../screens/stack';
const AppContainer = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default AppContainer;
